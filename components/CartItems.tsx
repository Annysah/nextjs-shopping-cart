import { CartItemProp, useProducts } from "../context/appContext";

import { Products } from "../lib/xata";

import { type FC } from "react";

import Image from "next/image";

type CartItemsProp = {
  cartItem: CartItemProp;
  onAddToCart: (product: Products) => void;
  onRemoveFromCart: (product: Products) => void;
}

const CartItems: FC<CartItemsProp> = ({ cartItem }) => {
  const { onAddToCart, onRemoveFromCart } = useProducts();

  const getCartItemPrice = Number(cartItem.product.price) * (cartItem.quantity)

  return (
    <>
      <main className="flex items-center justify-center p-10 w-full h-full bg-white">
        <div className="border-t border-b pt-0 grid grid-cols-2 gap-14">
          <div className="flex flex-col justify-start">
            <div
              className="flex flex-col w-full mt-3 h-44 justify-items-start rounded-l-lg overflow-hidden"
              style={{ height: "250px" }}
            >
              <Image
                width={400}
                height= {250}
                src={`${cartItem.product.image}`}
                alt={`${cartItem.product.id}`}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 mt-3">
              <h1 className="capitalize text-2xl font-bold">{cartItem.product.name}</h1>
              <h2 className="text-xl">${cartItem.product.price}</h2>
              <div className="w-1/6">
                <p className="mb-1 text-sm text-gray-700 font-thin">Quantity</p>
                <div className="flex border bg-gray-100">
                  <div className="ml-2 text-green-900 border-r">
                    <button onClick={() => onRemoveFromCart(cartItem.product)}>-</button>
                  </div>
                  <div className="ml-2 mr-2 text-lg text-gray-700">
                    <p>{cartItem.quantity}</p>
                  </div>
                  <div className="ml-2 text-green-900 border-l">
                    <button onClick={() => onAddToCart(cartItem.product)}>+</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 my-6 cursor-pointer">
                <div className="bg-transparent rounded border px-2 py-3 text-gray w-1/6 text-center">
                  ${getCartItemPrice}
                </div>

                <div className="text-red-500 border py-3 px-4 rounded">
                  <button onClick={() => onRemoveFromCart(cartItem.product)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartItems;
