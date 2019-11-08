import React from "react";
import { Img, Container, CartWrapper } from "./CartStyle";
interface Props {
  scroll: boolean;
}
const Cart: React.FC<Props> = ({ scroll }) => {
  return (
    <Container>
      <Img scroll={scroll}>
        <i className="fas fa-shopping-basket" />
      </Img>
      <CartWrapper>Cart items here..</CartWrapper>
    </Container>
  );
};

export default Cart;
