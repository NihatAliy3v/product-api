import React, { useEffect, useState } from "react";
import "./index.scss";
import Card from "../../components/Card";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json.products))
  },[])
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <h2 className="title">
            Products
          </h2>
          <div className="productContainer">
            {data.map((item) => (
              <Card
                key={item.id}
                photo={item.images[0]}
                id={item.id}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
