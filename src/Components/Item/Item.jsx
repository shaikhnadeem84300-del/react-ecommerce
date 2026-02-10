// src/Components/Item/Item.jsx
import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          onClick={() => window.scrollTo(0, 0)} // ✅ wrap in arrow function
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <span className="new-price">${props.new_price}</span>
        <span className="old-price">${props.old_price}</span>
      </div>
    </div>
  );
};

export default Item; // ✅ keep default export
