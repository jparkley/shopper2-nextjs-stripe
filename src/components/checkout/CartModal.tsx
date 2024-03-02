'use client';

import { useState } from "react";
import Modal from "react-modal";
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

  console.log('isopen', isOpen)

  return (
    <>
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      ></button>
      {/* // <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay"> */}
      {showModal && 
      <Modal isOpen={isOpen} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay"
        // ariaHideApp={false}
      >
        <div className="">
          <div className="relative inline-flex justify-between">
            <div className="relative flex flex-col bg-red-100">
              <div className="modal-header d-inline-flex justify-content-between">
                <span className="modal-title me-3">Cart Summary</span>
                <span className="d-flex align-items-center">
                  <strong>
                    {/* {formattedTotalPrice} ({cartCount} Items) */}
                    TODO: how many
                  </strong>
                  {/* <button type="button" className="btn-close ms-1" aria-label="Close" onClick={toggleModal}></button> */}
                </span>
              </div>            

              <div className="modal-body">
                TODO: cart item list
                {/* {cartItems.map(item => (                
                  <CartItem key={item.id} item={item} />
                ))} */}
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-primary text-dark" onClick={handleCheckout}>
                  <strong>Checkout</strong>
                </button> */}
                <button 
                  type="button" 
                  className="btn btn-primary text-dark" 
                  data-bs-dismiss="modal" 
                  // onClick={toggleModal}
                  onClick={() => setShowModal(false)}
                >
                Keep Shopping(close modal)
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      }
    </>
  )
}

export default CartModal
