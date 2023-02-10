import { useContext, useEffect, useState } from "react";
import "./index.scss";
import Card from "../../components/Card";
import axios from "axios";
import CartContext from "../../CartContext";
const ProductList = () => {
  const {addCart} = useContext(CartContext)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => setData(res.data));
  };
 
  const getData = async () => {
    await axios.get("http://localhost:5000/api/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <h2 className="title">Products</h2>
          <div className="productContainer">
            {data.map((item) => (
              <Card
                key={item.id}
                photo={`http://localhost:5000/${item.productImage}`}
                id={item.id}
                name={item.name}
                details={item.details}
                featured={item.featured}
                handleDelete={() => handleDelete(item.id)}
                addToCart={() => addCart(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
