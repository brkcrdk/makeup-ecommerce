import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const CartImg = styled.img``;
const CartInfo = styled.div``;
const CartPrice = styled.h5``;
const CartCount = styled.p``;
const CartRemove = styled.button;
const Splitter = styled.hr``;

interface Props {
  img: string;
  name: string;
  price: string;
  priceSign: string;
  count: number;
}

const CartItem: React.FC<Props> = ({ img }) => {
  return (
    <Container>
      <CartImg>cart img</CartImg>
    </Container>
  );
};

export default CartItem;
