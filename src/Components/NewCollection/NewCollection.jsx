// src/Components/NewCollection/NewCollection.jsx
import React from "react";
import "./NewCollection.css";
import Item from "../Item/Item";
import new_collection from "../Assets/new_collections";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <div className="collections">
        {new_collection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection; // ✅ default export
