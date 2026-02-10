import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  // Initialize cart with product IDs set to 0
  const getDefaultCart = () => {
    const cart = {};
    all_product.forEach(product => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add item to cart
  const addToCart = (productId) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  // Remove item completely from cart
  const removeFromCart = (productId) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: 0,
    }));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  // Decrease quantity by 1
  const decreaseCartItem = (productId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      if (!updated[productId] || updated[productId] <= 0) return updated;
      updated[productId] -= 1;
      if (updated[productId] <= 0) updated[productId] = 0;
      return updated;
    });
  };

  // Get total items count
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  // Get total price safely
  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = all_product.find(p => p.id === Number(id));
      if (product) total += cartItems[id] * Number(product.new_price);
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        decreaseCartItem,
        removeFromCart,
        clearCart,
        getTotalCartItems,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
