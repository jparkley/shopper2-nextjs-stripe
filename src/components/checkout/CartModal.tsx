'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import axios from "axios";

const CartModal = ({ isOpen = true, toggleModal = true }) => {

  const [showModal, setShowModal] = useState(isOpen);
  const { cart: cartProducts } = useCart();

  const handleCheckout = async () => {
    try {
      const { data } = await axios.post('/api/checkout/', {
        data: cartProducts,
      });
      window.location.href = data.url;
    } catch(error) {
      console.log('Error in axios call', error)
    }
  }

  const totalAmount = cartProducts.reduce((total, product) => total + (product.quantity * product.price), 0);

  return (
    <>
    <button
        className="bg-teal-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >Cart</button>
      {showModal && 
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative inline-flex justify-between">
            <div className="relative flex flex-col bg-orange-50 pt-12 pb-8 px-14">
              <div className="w-96 p-2 text-center">
                <h5 className="text-lg font-semibold">Cart Summary</h5>
              </div>            

              <div className="">
                { cartProducts.length == 0 ? (
                  <div className="flex justify-center pt-8">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cartProducts.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))
                )}
              </div>

              { (cartProducts.length > 0) && 
              <>
                <div className="flex justify-end mt-6 mr-20">
                  <p className="font-base">Total: ${totalAmount}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <button 
                        type="button" 
                        className="bg-slate-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        data-bs-dismiss="modal"
                        onClick={handleCheckout}
                      > Check Out </button>
                </div>
              </>
              }
              <div className="flex justify-end mt-6">
                <button 
                  type="button" 
                  className="bg-slate-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                > X </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CartModal
