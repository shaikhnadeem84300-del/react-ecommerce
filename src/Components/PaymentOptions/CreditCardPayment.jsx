import React, { useContext, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { ShopContext } from '../../Context/ShopContext'

const CreditCardPayment = () => {
  const { getTotalCartAmount, clearCart } = useContext(ShopContext)
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)
    const total = getTotalCartAmount() * 100

    try {
      const response = await fetch('http://localhost:4000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      })
      const { clientSecret } = await response.json()

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })

      if (error) {
        setMessage(error.message)
      } else {
        setMessage('Payment successful!')
        clearCart()
      }
    } catch (err) {
      setMessage('Payment failed.')
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe || isProcessing} type="submit">
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default CreditCardPayment