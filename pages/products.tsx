import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
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

            {/*<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
                }}
              >
                <Link href="/cart" passHref>
                    <button className="bg-green-400 d hover:shadow-lg border border-gray-200 text-gray-700 font-semibold -mb-16  py-2 px-4 rounded shadow">
                        <i className="fa fa-shopping-cart text-white"></i>
                    </button>
                </Link>
                
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Pink-Colored</h3>
                <span className="text-gray-500 mt-2">$195</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1561114074-0acc29c74617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVuJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
                }}
              >
                <Link href="/cart">
                  <button className="bg-green-400 d hover:shadow-lg border border-gray-200 text-gray-700 font-semibold -mb-16 py-2 px-4 rounded shadow">
                    <i className="fa fa-shopping-cart text-white"></i>
                  </button>
                </Link>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Sun-Shaped</h3>
                <span className="text-gray-500 mt-2">$180</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509222413196-40eb6b6b96e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGdyZWVuJTIwcGxhbnRzJTIwaW4lMjB2YXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
                }}
              >
                <Link href="/cart">
                  <button className="bg-green-400 d hover:shadow-lg border border-gray-200 text-gray-700 font-semibold -mb-16  py-2 px-4 rounded shadow">
                    <i className="fa fa-shopping-cart text-white"></i>
                  </button>
                </Link>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Cactus</h3>
                <span className="text-gray-500 mt-2">$150</span>
              </div>
            </div>*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const xata = new XataClient();
  const products = await xata.db.products.getMany();
  return {
    props: {
      products,
    },
  };
};
