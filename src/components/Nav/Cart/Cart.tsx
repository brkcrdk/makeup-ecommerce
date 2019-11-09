import React, { useState } from "react";
import { Img, Container, CartWrapper, CartContent } from "./CartStyle";
import { useSelector } from "react-redux";
import { IProducts } from "../../../store/fetchProducts/types";
interface Props {
  scroll: boolean;
}
interface CartProps {
  cartStore: {
    cart: {
      product: IProducts;
      count: number;
    }[];
  };
}
const Cart: React.FC<Props> = ({ scroll }) => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  const renderEmpty = <CartContent>Cart is empty</CartContent>;
  const [total, setTotal] = useState(0);
  const renderItems = (
    <CartContent>
      {cart.length > 0
        ? cart.map((item, index) => {
            const price = parseFloat(item.product.price_sign);
            setTotal(total + item.count * price);
            return (
              <li key={index}>
                {item.count} x {item.product.price}
              </li>
            );
          })
        : ""}
      <p>Total Price: {total}</p>
    </CartContent>
  );
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
