import React, { useEffect, useState } from "react";
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
    }[];
  };
}
const Cart: React.FC<Props> = ({ scroll }) => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  const [items, setItems] = useState();
  useEffect(() => {
    // setItems(cart);
    console.log(cart.length);
  }, [cart]);
  // console.log(items);
  return (
    <Container>
      <Img scroll={scroll} count={cart.length}>
        <i className="fas fa-shopping-basket" />
        <span>{cart.length}</span>
      </Img>
      <CartWrapper>
        <CartContent>Cart items here</CartContent>
      </CartWrapper>
    </Container>
  );
};

export default Cart;
