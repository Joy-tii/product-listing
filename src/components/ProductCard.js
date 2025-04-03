import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price, description, discount, stock }) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        {discount && <span className="sale-badge">SALE</span>}
        <img src={image} alt={name} className="product-img" />
      </div>
      <h2 className="product-title">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">
        ₹{discount ? discount : price}
        {discount && <span className="original-price">₹{price}</span>}
      </p>
      {stock ? (
        <button className="add-to-cart">Add to Cart</button>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}
    </div>
  );
};

export default ProductCard;
