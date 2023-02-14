import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    const localCart = localStorage.getItem("cart");
    if(localCart){
      setCart(JSON.parse(localCart))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  const addCart = (id) => {
    const checkExist = cart.find((item)=>item.id===id);

    if(checkExist){
      const nonExist = cart.filter((item)=>item.id!==id);
      setCart(
        [...nonExist,
        {...checkExist,quantity:checkExist.quantity+1}]
      )

    }else{
      const product = data.find((item) => item.id === id);
      setCart((prev) => [...prev, {...product,quantity:1}]);
    }

  };
  const removeCart = (id) =>{
    const noProduct = cart.filter((item)=>item.id!==id)
    setCart(noProduct)
  }
  return (
    <CartContext.Provider value={{ cart, addCart,removeCart,data,setData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
