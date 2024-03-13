'use client'

import { useCart } from "@/context/CartContext";
import { ICartProduct, IProduct } from "@/lib/types/types";

const CartItem = ( { item }: { item: ICartProduct} ) => {
  console.log('........ in CartItem: item', item)

  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <>
      <div className="flex flex-col mt-3">
        {/* <img className="img-tiny me-4" src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} alt={item.name} /> */}
        <div className="">
          <div className="flex">
            <div className="p-2 flex-none">
                <span className="text-base">
                  {item.name}
                  {/* ({item.sku}) */}
                </span>
            </div>

            <div className="p-3 grow">
              <p className="text-end text-sm">
                {item.price} x {item.quantity}
              </p>
            </div>

            <div className="p-1 flex-none">
              <button className="font-bold bg-teal-100 active:bg-teal-200 px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 transition-all duration-150" 
              onClick={() => increaseQuantity(item.id)} type="button"> + </button>
              <button className="font-bold bg-teal-100 active:bg-teal-200 px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 transition-all duration-150" 
              onClick={() => decreaseQuantity(item.id)} type="button"> - </button>
            </div>
          </div>
        </div>
        <div className="ms-auto text-end">
          {/* <input className="text-end form-control input-quantity" type="number" value={item.quantity} min={0} onChange={handleSetItemQuantity} />           */}
        </div>
      </div>    
      
    </>
    
  )
}

export default CartItem