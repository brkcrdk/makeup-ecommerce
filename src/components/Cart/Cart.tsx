import React from "react";
import { Container, CartList } from "./CartStyle";
import { useSelector } from "react-redux";
import { IProducts } from "../../store/fetchProducts/types";
interface Props {}
interface CartProps {
  cartStore: {
    cart: {
      product: IProducts;
      count: number;
    };
  };
}

const Cart: React.FC<Props> = () => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  console.log(cart);
  return (
    <Container>
      <CartList>
        <ul>
          <li>Cart1</li>
        </ul>
      </CartList>
    </Container>
  );
};

export default Cart;
