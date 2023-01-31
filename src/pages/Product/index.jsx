import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from 'react-router-dom';

const Product = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json.products))
  },[])
  const findedProduct = data.find((item)=>item.id==id)
  console.log(findedProduct);
  return (
    <div className='product'>
      <div className="container">
        <div className="row">
          <div className="img">
            <img src={findedProduct&&findedProduct.images[0]} alt="" />
          </div>
          <div className="content">{findedProduct&&findedProduct.title}</div>
        </div>
      </div>

    </div>
  )
}

export default Product