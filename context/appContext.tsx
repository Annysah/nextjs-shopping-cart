import { useState, createContext, useContext } from "react";

import { Products } from "../lib/xata";

export interface CartItemProp {
  product: Products;
  quantity: number;
}

//type for our context
type ProductsContextType = {
  cartItems: CartItemProp[];
  onAddToCart: (product: Products) => void;
  onRemoveFromCart: (product: Products) => void;
  onClearCart: () => void;
};

//context default values
const ProductsContextDefValues: ProductsContextType = {
  cartItems: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  onClearCart: () => {},
};

//create context using the createContext()
const ProductsContext = createContext<ProductsContextType>(
  ProductsContextDefValues
);

//set the useContext
export const useProducts = () => useContext(ProductsContext);

//create a provider
type Prop = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: Prop) => {
  const [cartItems, setCartItems] = useState<CartItemProp[]>([]);

  const onAddToCart = (product: Products) => {
    const findProductItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (findProductItem) {
      const newItems = cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            product: findProductItem.product,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(newItems);
    } else {
      const newItem = {
        product: product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const onRemoveFromCart = (product: Products) => {
    const findProductItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (findProductItem?.quantity === 1) {
      const deleteItem = cartItems.filter(
        (item) => item.product.id !== product.id
      );
      setCartItems(deleteItem);
    } else {
      if (findProductItem) {
        const newItem = cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: findProductItem.product,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCartItems(newItem);
      }
    }
  };

  const onClearCart = () => setCartItems([]);

  const value = {
    cartItems,
    onAddToCart,
    onRemoveFromCart,
    onClearCart,
  };
  return (
    <>
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};
