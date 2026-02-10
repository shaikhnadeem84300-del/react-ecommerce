import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CashOnDelivery = () => {
  const { clearCart } = useContext(ShopContext)

  const handlePlaceOrder = () => {
    clearCart()
    alert('Order placed successfully! You will pay on delivery.')
  }

  return (
    <div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  )
}

export default CashOnDelivery