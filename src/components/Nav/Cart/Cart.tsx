import React from "react";
import { Img } from "./CartStyle";
import Image from "./cart.svg";
const Cart: React.FC = () => {
  return (
    <Img>
      <i className="fas fa-shopping-basket" />
    </Img>
  );
};

export default Cart;
