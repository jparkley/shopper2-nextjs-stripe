'use client'

import { ICartProduct, IProduct } from "@/lib/types/types"

const CartItem = ( { item }: { item: ICartProduct} ) => {
  console.log('........ in CartItem: item', item)
  return (
    <>
      <div className="flex flex-col mt-3">
        {/* <img className="img-tiny me-4" src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} alt={item.name} /> */}
        <div className="flex flex-row">
          <div className="grid grid-cols-2">
            <div className="p-2">
                <span>
                  {item.name}
                  {/* ({item.sku}) */}
                </span>
            </div>

            <div className="p-2 w-64">
              <p className="text-end">
                <strong className="">
                  {item.price} x {item.quantity}
                </strong>
              </p>
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