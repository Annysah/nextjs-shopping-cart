import Head from "next/head";
import Link from "next/link";
import CartItem from "../components/CartItems";
import { useProducts } from "../context/appContext";
import { CartItemProp } from "../context/appContext";

const Cart = () => {
  const { cartItems, onAddToCart, onRemoveFromCart } = useProducts();

  const getTotal = (products: CartItemProp[]) =>
    products.reduce(
      (accumulator, product) =>
        accumulator + product.quantity * Number(product.product.price),
      0
    );

  const getCartTotal = (cartItems: CartItemProp[]) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );

  return (
    <>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="font-thin mt-8 cursor-pointer">
          <Link href="/products">
            <i
              className="fa fa-long-arrow-left ml-6 mr-2 text-green-300"
              aria-hidden="true"
            ></i>
            Back
          </Link>
        </div>
        <h1 className="-mt-6 text-center text-lg font-bold">Cart Summary</h1>
        <div className="text-2xl text-green-400 absolute top-8 right-6">
          <Link href="/cart">
            <i className="fa fa-shopping-cart">
              <sup style={{ fontFamily: "monospace" }}>
                {getCartTotal(cartItems)}
              </sup>
            </i>
          </Link>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <h1 className="text-center">Your Cart is Empty!</h1>
      ) : null}

      <div className="flex-grow">
        <div className="m-4 grid grid-cols-1 gap-6 mt-8">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              cartItem={item}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </div>
      </div>
      <div>
        {cartItems.length === 0 ? null : (
          <div>
            <h2
              className="text-lg text-gray-700 font-semibold"
              style={{ position: "absolute", right: "450px" }}
            >
              Total
            </h2>
            <h2
              className="text-lg text-gray-700 font-semibold"
              style={{ position: "absolute", right: "170px" }}
            >
              ${getTotal(cartItems)}
            </h2>
          </div>
        )}
        <br />

        <span className="float-right">
          <div className="flex border border-gray-200 d hover:shadow-lg border-2 item-center px-8 py-3 font-semibold w-4/6 mb-4 mr-48 bg-green-400 text-white">
            <p className="ml-16">Checkout</p>
            <i
              className="fa fa-long-arrow-right font-semibold ml-20 mt-2 text-white float-right"
              aria-hidden="true"
            ></i>
          </div>
        </span>
      </div>
    </>
  );
};

export default Cart;
