import React from "react";
import styled from "styled-components";
import { device } from "../utils";
import { IProducts } from "../../store/fetchProducts/types";
interface Props {
  cart: {
    product: IProducts;
    count: number;
  }[];
}

const Container = styled.div`
  border: 1px solid yellow;
  margin: 2em;
  padding: 2em;
`;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 0 2em;
  }
  p {
    border: 1px solid red;
  }
`;

const ListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  img {
    width: 3em;
    height: 3em;
  }
  input {
    width: 4em;
  }
`;

const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <Container>
      <ListHeader>
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </ListHeader>
      <hr />
      {cart.map((item, key) => (
        <ListItems key={key}>
          <img
            src={item.product.api_featured_image}
            alt={`cart-${item.product.name}`}
          />
          <p>{item.product.brand}</p>
          <p>{item.product.name}</p>
          <div>
            <button>-</button>
            <input readOnly value={item.count} />
            <button>+</button>
          </div>
          <p>$ {item.product.price}</p>
          <p></p>
        </ListItems>
      ))}
    </Container>
  );
};

export default CartList;
