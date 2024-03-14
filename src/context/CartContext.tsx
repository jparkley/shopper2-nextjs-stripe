'use client'

import { ReactNode, createContext, useContext, useState} from "react";
import { ICartProduct, IProduct } from "@/lib/types/types";
import Cart from "../components/checkout/Cart";

interface ICartContextType {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
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
        name: product.name,
        price: product.price,
        quantity: 1,        
      }])
    }
  }

  // const removeFromCart = (productId: string) => {
  //   const updatedCart = cart.filter((item) => item.id !== productId);
  //   setCart(updatedCart);
  // }

  const increaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) => (
      item.id === productId ? {...item, quantity: item.quantity + 1} : item
    ))
    setCart(updatedCart);
  }

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ?
      {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item
    )
  
    // remove item from cart when its quantity is 0
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  }

  console.log('--------- in Context: cart', cart)

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
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