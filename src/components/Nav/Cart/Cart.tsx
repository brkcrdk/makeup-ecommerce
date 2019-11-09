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
  const [cartItems, setCartItems] = useState();
  useEffect(() => {
    if (cart.length > 0) {
      setCartItems(cart);
    }
  }, [cart]);
  console.log(cartItems);
  return (
    <Container>
      <Img scroll={scroll} count={0}>
        <i className="fas fa-shopping-basket" />
        <span>1</span>
      </Img>
      <CartWrapper>
        <CartContent>Cart items here</CartContent>
      </CartWrapper>
    </Container>
  );
};

export default Cart;
