'use client'

import { ReactNode, createContext, useContext, useState} from "react";
import Product from "../product/Product";
import { ICartProduct, IProduct } from "@/lib/types/types";
import Cart from "./Cart";

interface ICartContextProps {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<ICartContextProps | unknown>(undefined);

export const CartContextProvider:React.FC<ICartContextProviderProps> = ({children}) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const addToCart = (product: IProduct) => {
    const existingItemIdx = cart.findIndex((item) => (item.id === product.id));

    if (existingItemIdx !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIdx].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, {
        id: product.id,
        price: product.price,
        quantity: 1,        
      }])
    }
  }

  const removeFromCart = (productId: number) {}

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );

}