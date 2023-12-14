import React from "react";
import { Link,useNavigate } from "react-router-dom";
import productsData from "../assets/text/products.json";
const images = require.context("../assets/img/", true);

const ProductList = () => {
  const navigate = useNavigate();




  return (
    <div className="productlist">
      <div className="productlist__content">
        {productsData.map((product) => (
          <div key={product.id} className="productlist__content--card"   
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="productlist__content--card-img">
              <img src={images(product.img)} alt="Order flow"></img>
            </div>

            <div className="productlist__content--card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {/* <Link to={`/product/${product.id}`}>Ver detalles</Link> */}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
