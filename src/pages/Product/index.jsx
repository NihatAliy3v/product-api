import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const findedProduct = data.find((item) => item.id === id);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="row">
            <Link to={`/products/${id}/edit`}>Edit Product</Link>
            <div className="img">
              <img
                src={`http://localhost:5000/${
                  findedProduct && findedProduct.productImage
                }`}
                alt=""
              />
            </div>
            <div className="content">
              <h3>{findedProduct && findedProduct.name}</h3>
              <p>{findedProduct && findedProduct.details}</p>
              <p>{findedProduct && findedProduct.price}</p>
              <p>
                {findedProduct &&
                  findedProduct.featured === "true" &&
                  "featured"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
