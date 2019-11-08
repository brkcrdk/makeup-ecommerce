import React, { useEffect } from "react";
import { Img, Container, CartWrapper, CartContent } from "./CartStyle";
import { useSelector } from "react-redux";
import { IProducts } from "../../../store/fetchProducts/types";
interface Props {
  scroll: boolean;
}
interface CartProps {
  cartStore: {
    cart: {
      products: IProducts;
      count: number;
    };
  };
}
const Cart: React.FC<Props> = ({ scroll }) => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
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
