import React, { useContext } from "react";
import CartContext from "../../CartContext";
import Card from "../../components/Card";
import "./index.scss";

const Cart = () => {
  const { cart, removeCart } = useContext(CartContext);
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          {cart.map((item, index) => {
            return (
              <Card
                key={index}
                name={item && item.name}
                photo={item && `http://localhost:5000/${item.productImage}`}
                details={item && item.details}
                featured={item && item.featured}
                quantity={item.quantity}
                variant="remove"
                onClick={() => removeCart(item.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
