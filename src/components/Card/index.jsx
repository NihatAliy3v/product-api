import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Card = ({ name, id, photo, details,featured}) => {
  return (
    <div className="card">
      <Link to={`/products/${id}`} className="img">
        <img src={photo} alt="" />
      </Link>
      <Link to={`/products/${id}`} className="content">
        <h3 className="productTitle">{name}</h3>
        <p className="details">{details}</p>
        <p>{featured==="true"&&"featured"}</p>
      </Link>
    </div>
  );
};

export default Card;
