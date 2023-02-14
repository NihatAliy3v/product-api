import { useContext, useEffect } from "react";
import "./index.scss";
import Card from "../../components/Card";
import axios from "axios";
import CartContext from "../../CartContext";
const ProductList = () => {
  const {addCart,data,setData} = useContext(CartContext)

  useEffect(()=>{
    axios.get("http://localhost:5000/api/products")
    .then((res)=>setData(res.data))
  },[setData])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => setData(res.data));
  };
 
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
                onClick={() => addCart(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
