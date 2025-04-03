import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData";
import "./ProductList.css"; // Ensure this file is correctly imported

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState("All");

  const sortByPrice = (order) => {
    const sortedProducts = [...products].sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const filterByCategory = (selectedCategory) => {
    if (selectedCategory === "All") {
      setProducts(productsData);
    } else {
      setProducts(productsData.filter((p) => p.category === selectedCategory));
    }
    setCategory(selectedCategory);
  };

  return (
    <div className="product-list-container">
      <h1 className="product-header">🛒 Product Listing</h1>
      
      {/* Combined container for filters and sorting options */}
      <div className="controls-wrapper">
        <div className="filters-group">
          {["All", "Fashion", "Electronics"].map((cat) => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              className={`filter-btn ${category === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="sorting-group">
          <button onClick={() => sortByPrice("lowToHigh")} className="sort-btn">
            Sort: Low to High
          </button>
          <button onClick={() => sortByPrice("highToLow")} className="sort-btn">
            Sort: High to Low
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
