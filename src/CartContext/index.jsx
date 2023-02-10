import axios from "axios";
import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setData(res.data);
    });
  }, []);


  const addCart = (id) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const cartProducts = localStorage.getItem("cart");
    const carts = JSON.parse(cartProducts);

    const product = data.find((item) => item.id === id);
    setCart([...carts,product]);
  };
  



  
  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
