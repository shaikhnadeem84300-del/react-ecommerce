import React, { useContext } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { ShopContext } from '../../Context/ShopContext'

const PayPalPayment = () => {
  const { getTotalCartAmount, clearCart } = useContext(ShopContext)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: getTotalCartAmount().toFixed(2),
          },
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert('Payment successful! Transaction completed by ' + details.payer.name.given_name)
      clearCart()
    })
  }

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
    />
  )
}

export default PayPalPayment