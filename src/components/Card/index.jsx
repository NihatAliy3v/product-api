import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Card = ({ name, id, photo, details, featured, onClick }) => {
  return (
    <div className="card-container">
      <div className="card">
        <Link to={`/products/${id}`} className="img">
          <img src={photo} alt="" />
        </Link>
        <div className="content">
        <Link to={`/products/${id}`} className="contentLink">
          <h3 className="productTitle">{name}</h3>
          <p className="details">{details}</p>
          <p className="featured">{featured === "true" && "featured"}</p>
        </Link>
          <button onClick={onClick} className="deleteBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
