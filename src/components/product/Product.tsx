'use client';

import { IProduct } from "@/lib/types/types"
import Link from "next/link";
import { useContext } from "react";
import { CartContext, useCart } from "../../context/CartContext";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ( { product} ) => {

  const { cart, addToCart, removeFromCart  } = useCart();

  return (
    <div className="border rounded-sms p-4 shadow-sm md-5">
      <Link href={`/`} />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <div className="flex flex-row items-center justify-between p-2">
        <p>${product.price.toFixed(2)}</p>
        <button 
          disabled={false}
          onClick={() => addToCart(product)}
          className="text-sm text-cyan-600 font-semibold bg-slate-50 m-2 p-2 shadow-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {true ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
    
  )
}

export default Product