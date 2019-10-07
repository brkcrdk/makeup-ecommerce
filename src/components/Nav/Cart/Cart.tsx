import React from "react";
import { Img } from "./CartStyle";
import Image from "./cart.svg";
interface Props {
  scroll: boolean;
}
const Cart: React.FC<Props> = ({ scroll }) => {
  return (
    <Img scroll={scroll}>
      <i className="fas fa-shopping-basket" />
    </Img>
  );
};

export default Cart;
