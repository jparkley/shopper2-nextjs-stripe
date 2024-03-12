'use client'

import { ReactNode, createContext, useContext, useState} from "react";
import Product from "../components/product/Product";
import { ICartProduct, IProduct } from "@/lib/types/types";
import Cart from "../components/checkout/Cart";

interface ICartContextType {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContextType | unknown>(undefined);

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

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => Number(item.id) !== productId);
    setCart(updatedCart);
  }

  console.log('--------- in Context: cart', cart)

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

export const useCart = (): ICartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error: CartContextProvider not found when calling useCart");
  }
  return context as ICartContextType;
}