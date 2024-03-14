'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";

const CartModal = ({ isOpen = true, toggleModal = true }) => {

  const [showModal, setShowModal] = useState(isOpen);

  const { cart: cartItems } = useCart();
  console.log('==== cart in modal', cartItems)

  const handleCheckout = async () => {
    await fetch("http://localhost:3001/api/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ products: cartItems })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log('response')
      if (response.url) {
        console.log('url---- ', response.url)
      }
    })

  }

  const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)


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
                { cartItems.length == 0 ? (
                  <div className="flex justify-center pt-8">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))
                )}
              </div>

              { (cartItems.length > 0) && 
                  <div className="flex justify-end mt-6 mr-20">
                  {/* <button type="button" className="btn btn-primary text-dark" onClick={handleCheckout}>
                    <strong>Checkout</strong>
                  </button> */}
                  <p className="font-base">Total: ${totalAmount}</p>
                  </div>
              }

              <div className="flex justify-end mt-6">
                {/* <button type="button" className="btn btn-primary text-dark" onClick={handleCheckout}>
                  <strong>Checkout</strong>
                </button> */}
                <button 
                  type="button" 
                  className="bg-slate-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  data-bs-dismiss="modal"
                  onClick={handleCheckout}
                > Check Out </button>

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
