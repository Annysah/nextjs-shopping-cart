import Head from "next/head";
import Link from "next/link";

import { type FC } from "react";

import Navbar from "../components/Navbar";
import { useProducts } from "../context/appContext";

import { Products, XataClient } from "../lib/xata";

type Props = NonNullable<
  Awaited<ReturnType<typeof getServerSideProps>>["props"]
>;

export interface CartItem {
  product: Products;
  quantity: number;
}

const Products: FC<Props> = ({ products }) => {
  const {onAddToCart} = useProducts()
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="my-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-2xl font-medium">
            Featured Plants
          </h3>
          <span className="mt-3 text-sm text-gray-500">200+ Plants</span>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {products.map((product) => (
              <div
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                key={product.id}
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  <Link href="/cart" passHref>
                    <button
                      className="bg-green-400 d hover:shadow-lg border border-gray-200 text-gray-700 font-semibold -mb-16  py-2 px-4 rounded shadow"
                      onClick={() => onAddToCart(product)}
                    >
                      <i className="fa fa-shopping-cart text-white"></i>
                    </button>
                  </Link>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{product.name}</h3>
                  <span className="text-gray-500 mt-2">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const xata = new XataClient();
  const products = await xata.db.products.getMany();
  return {
    props: {
      products,
    },
  };
};

export default Products;
