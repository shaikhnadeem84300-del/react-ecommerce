// src/Pages/ShopCategory.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import all_product from '../Components/Assets/all_product';
import './CSS/ShopCategory.css'; // ✅ correct

const ShopCategory = ({ category, banner }) => {
  const { cartItems, addToCart, decreaseCartItem } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        all_product.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        )
      );
    } else {
      setFilteredProducts(all_product);
    }
  }, [category]);

  const getQuantity = (id) => cartItems[id] || 0;

  return (
    <div className="shop-category-container">
      {banner && <img src={banner} alt="Banner" className="category-banner" />}
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              <div className="cart-controls">
                {getQuantity(product.id) > 0 && (
                  <button onClick={() => decreaseCartItem(product.id)}>-</button>
                )}
                <span>{getQuantity(product.id)}</span>
                <button onClick={() => addToCart(product.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
