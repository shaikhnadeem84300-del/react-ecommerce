import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const navigate = useNavigate();
  const { all_product, cartItems, addToCart, decreaseCartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState('');

  const handlePromoSubmit = () => {
    if (promoCode.trim() === 'DISCOUNT10') {
      alert('Promo code applied! 10% off.');
    } else {
      alert('Invalid promo code');
    }
    setPromoCode('');
  };

  const cartProducts = all_product.filter(product => cartItems[product.id] > 0);

  if (cartProducts.length === 0) {
    return (
      <div className="cartitems">
        <h2>Your cart is empty 😔</h2>
        <button onClick={() => navigate('/shop')}>Go to Shop</button>
      </div>
    );
  }

  return (
    <div className="cartitems">
      {/* Table Header */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Product List */}
      {cartProducts.map(product => {
        const quantity = cartItems[product.id];
        return (
          <div key={product.id}>
            <div className="cartitems-format">
              <img src={product.image} alt={product.name} className="carticon-product-icon" />
              <p>{product.name}</p>
              <p>${Number(product.new_price).toFixed(2)}</p>

              <div className="cartitems-quantity-controls">
                <button onClick={() => decreaseCartItem(product.id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => addToCart(product.id)}>+</button>
              </div>

              <p>${(Number(product.new_price) * quantity).toFixed(2)}</p>
              <img
                src={remove_icon}
                alt="remove"
                className="cartitems-remove-icon"
                onClick={() => removeFromCart(product.id)}
              />
            </div>
            <hr />
          </div>
        );
      })}

      {/* Cart Total Section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>

          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
