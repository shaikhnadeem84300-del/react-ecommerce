import React, { useContext } from 'react'
import './CheckoutSummary.css'
import { ShopContext } from '../../Context/ShopContext'

const CheckoutSummary = () => {
  const { all_product, cartItems, getTotalCartAmount } = useContext(ShopContext)

  const cartProducts = all_product.filter(product => cartItems[product.id] > 0)

  return (
    <div className="checkout-summary">
      {/* Table Header */}
      <div className="checkout-summary-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />

      {/* Product List */}
      {cartProducts.map(product => {
        const quantity = cartItems[product.id]
        return (
          <div key={product.id}>
            <div className="checkout-summary-format">
              <img src={product.image} alt={product.name} className="checkout-summary-product-icon" />
              <p>{product.name}</p>
              <p>${Number(product.new_price).toFixed(2)}</p>
              <p>{quantity}</p>
              <p>${(Number(product.new_price) * quantity).toFixed(2)}</p>
            </div>
            <hr />
          </div>
        )
      })}

      {/* Cart Total Section */}
      <div className="checkout-summary-total">
        <h1>Order Total</h1>
        <div>
          <div className="checkout-summary-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className="checkout-summary-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="checkout-summary-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount().toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary