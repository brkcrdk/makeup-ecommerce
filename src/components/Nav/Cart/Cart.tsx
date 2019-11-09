import React from "react";
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

  const renderEmpty = <CartContent>Cart is empty</CartContent>;
  const renderItems = cart.map((item, key) => (
    <CartContent key={key}>
      <li>
        {item.count}- {item.products.name}
      </li>
    </CartContent>
  ));
  return (
    <Container>
      <Img scroll={scroll} count={cart.length}>
        <i className="fas fa-shopping-basket" />
        <span>{cart.length}</span>
      </Img>
      <CartWrapper>{cart.length > 0 ? renderItems : renderEmpty}</CartWrapper>
    </Container>
  );
};

export default Cart;
