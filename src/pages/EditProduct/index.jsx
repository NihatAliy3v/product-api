import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");
  const [featured, setFeatured] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      const { name, price, details, productImage, featured } = res.data;
      setName(name);
      setPrice(price);
      setDetails(details);
      setProductImage(`http://localhost:5000/${productImage}`);
      setFeatured(featured);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productImage", productImage);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("featured", featured);
    formData.append("details", details);

    axios.put(`http://localhost:5000/api/products/${id}`, formData);
  };

  return (
    <section className="createProduct">
      <div className="container">
        <div className="row">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <input
              type="checkbox"
              name="featured"
              value={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <input
              type="file"
              name="productImage"
              onChange={(e) => setProductImage(e.target && e.target.files[0])}
            />
            <button>asdads</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
