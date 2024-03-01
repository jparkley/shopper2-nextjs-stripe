'use client';

import { IProduct } from "@/lib/types/types"

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ( { product} ) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
    </div>
    
  )
}

export default Product