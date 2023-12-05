import React from "react";
import { Link } from "react-router-dom";
import productsData from "../utils/products.json";

const ProductList = () => {
  return (
    <div className="productlist init">
      <div className="productlist__content init__c">
        <h2>Lista de Productos</h2>
        {productsData.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
