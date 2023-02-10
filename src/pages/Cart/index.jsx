import React, { useContext } from "react";
import CartContext from "../../CartContext";
import Card from "../../components/Card";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <section>
      <div className="container">
        <div className="row">
          {cart.map((item) => {
            return (
              <Card
                key={item && item.id}
                name={item && item.name}
                photo={item && `http://localhost:5000/${item.productImage}`}
                details={item && item.details}
                featured={item && item.featured}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
