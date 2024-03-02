import { useState } from "react"
// import { useShoppingCart } from "use-shopping-cart"
// import { FaShoppingCart } from "react-icons/fa"
import CartModal from "./CartModal"

const CartSummary = () => {
  // const { formattedTotalPrice, cartCount } = useShoppingCart()
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  return (
    <>
      <div onClick={toggleModal}>
        {/* <FaShoppingCart /> {formattedTotalPrice} ({cartCount}) */}
        click to open modal?
      </div>

      <CartModal isOpen={isOpen} />
    </>
  )
}

export default CartSummary
