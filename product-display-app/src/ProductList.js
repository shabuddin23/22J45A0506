import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
