import React, { useContext, useState } from 'react'
import './CSS/Checkout.css'
import { ShopContext } from '../Context/ShopContext'
import CheckoutSummary from '../Components/CheckoutSummary/CheckoutSummary'
import CreditCardPayment from '../Components/PaymentOptions/CreditCardPayment'
import PayPalPayment from '../Components/PaymentOptions/PayPalPayment'
import CashOnDelivery from '../Components/PaymentOptions/CashOnDelivery'

const Checkout = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  const [paymentMethod, setPaymentMethod] = useState('')

  const totalItems = getTotalCartItems()

  if (totalItems === 0 && paymentMethod === '') {
    return <div>Your cart is empty. Please add items to proceed.</div>
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method)
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <CheckoutSummary />
        </div>
        <div className="checkout-payment">
          <h2>Select Payment Method</h2>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={() => handlePaymentMethodChange('creditCard')}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => handlePaymentMethodChange('paypal')}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                value="cashOnDelivery"
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={() => handlePaymentMethodChange('cashOnDelivery')}
              />
              Cash on Delivery
            </label>
          </div>
          <div className={`payment-form ${paymentMethod ? 'show' : ''}`}>
            {paymentMethod === 'creditCard' && <CreditCardPayment />}
            {paymentMethod === 'paypal' && <PayPalPayment />}
            {paymentMethod === 'cashOnDelivery' && <CashOnDelivery />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout