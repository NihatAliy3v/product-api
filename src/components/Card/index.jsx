import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Card = ({
  name,
  id,
  photo,
  details,
  featured,
  onClick,
  count,
  variant = "add",
  quantity,
  handleDelete,
}) => {
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
            {quantity && <p className="quantity">{quantity}</p>}
          </Link>
          {variant === "add" && (
            <button onClick={onClick} className="addCart">
              Add to Cart
            </button>
          )}
          {variant === "remove" && (
            <button onClick={onClick} className="removeCart">
              Delete to Cart
            </button>
          )}
          {handleDelete && (
            <button onClick={handleDelete} className="removeCard">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
