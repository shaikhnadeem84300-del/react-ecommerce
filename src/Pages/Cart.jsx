import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  const navigate = useNavigate()

  const totalItems = getTotalCartItems()

  const handleProceedToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div>
      <CartItems/>
      {totalItems > 0 && (
        <button onClick={handleProceedToCheckout} style={{ backgroundColor: '#4CAF50', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', margin: '40px 0', }}>
          Proceed to Checkout
        </button>
      )}
    </div>
  )
}

export default Cart
