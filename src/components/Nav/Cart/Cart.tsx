import React from "react";
import { Img, Container, CartWrapper, CartContent } from "./CartStyle";
interface Props {
  scroll: boolean;
}
const Cart: React.FC<Props> = ({ scroll }) => {
  return (
    <Container>
      <Img scroll={scroll}>
        <i className="fas fa-shopping-basket" />
      </Img>
      <CartWrapper>
        <CartContent>Cart items here</CartContent>
      </CartWrapper>
    </Container>
  );
};

export default Cart;
