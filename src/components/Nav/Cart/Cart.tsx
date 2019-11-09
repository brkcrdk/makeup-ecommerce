import React from "react";
import { Img, Container, CartWrapper, CartContent } from "./CartStyle";
import { useSelector } from "react-redux";
import { IProducts } from "../../../store/fetchProducts/types";
import CartItem from "./CartItem";
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

  // const renderItems = (
  //   <CartContent>
  //     {cart.length > 0
  //       ? cart.map((item, index) => (
  //           <CartItem
  //             img={item.product.api_featured_image}
  //             name={item.product.name}
  //             price={item.product.price}
  //             priceSign={item.product.price_sign}
  //             count={item.count}
  //           />
  //         ))
  //       : ""}
  //     <p>
  //       Total Price:
  //       {totals.length > 0
  //         ? totals.reduce((sum, next) => {
  //             return (sum = sum + next);
  //           })
  //         : ""}
  //     </p>
  //   </CartContent>
  // );
  return (
    <Container>
      <Img scroll={scroll} count={cart.length}>
        <i className="fas fa-shopping-basket" />
        <span>{cart.length}</span>
      </Img>
      <CartWrapper>
        {cart.length > 0 ? <CartItem cart={cart} /> : renderEmpty}
      </CartWrapper>
    </Container>
  );
};

export default Cart;
