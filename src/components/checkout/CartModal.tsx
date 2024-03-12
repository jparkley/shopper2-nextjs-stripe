'use client';

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Modal from "react-modal";
import CartItem from "./CartItem";
// import { useShoppingCart } from "use-shopping-cart"
// import useCheckout from "../utils/useCheckout"
// import CartItem from "./CartItem"

// Modal.setAppElement("#root")
Modal.setAppElement('body');

const CartModal = ({ isOpen = true, toggleModal = true }) => {
  // const handleCheckout = useCheckout()
  // const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart()
  // const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

  const [showModal, setShowModal] = useState(isOpen);

   const { cart: cartItems } = useCart();
  console.log('==== cart in modal', cartItems)
  console.log('==== isopen', isOpen)

  return (
    <>
    <button
        className="bg-teal-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >Cart</button>
      {/* // <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay"> */}
      {showModal && 
      // <Modal isOpen={isOpen} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay"
      //   // ariaHideApp={false}
      // >
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative inline-flex justify-between">
            <div className="relative flex flex-col bg-orange-50 py-10 px-8">
              <div className="w-96 p-2">
                <h5 className="text-lg font-semibold">Cart Summary</h5>
              </div>            

              <div className="modal-body">
                {cartItems && cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <span className="d-flex align-items-center">
                  <strong>
                    {/* TODO: display total price */}
                    {/* {formattedTotalPrice} ({cartCount} Items) */}
                  </strong>
                  {/* <button type="button" className="btn-close ms-1" aria-label="Close" onClick={toggleModal}></button> */}
                </span>


              <div className="flex justify-end mt-6">
                {/* <button type="button" className="btn btn-primary text-dark" onClick={handleCheckout}>
                  <strong>Checkout</strong>
                </button> */}
                <button 
                  type="button" 
                  className="bg-teal-100 active:bg-teal-200 text-neutral-950 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                  data-bs-dismiss="modal" 
                  // onClick={toggleModal}
                  onClick={() => setShowModal(false)}
                >
                X
                </button>
              </div>
            </div>
          </div>
        </div>
      // </Modal>
      }
    </>
  )
}

export default CartModal
