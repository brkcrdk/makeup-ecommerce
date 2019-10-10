import React from "react";
import { Img } from "./CartStyle";
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
