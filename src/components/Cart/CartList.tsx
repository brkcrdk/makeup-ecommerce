import React from "react";
import styled from "styled-components";
import { device, colours } from "../utils";
import { IProducts } from "../../store/fetchProducts/types";
interface Props {
  cart: {
    product: IProducts;
    count: number;
  }[];
}

const Container = styled.div`
  margin: 2em;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 2em;
  }
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
  }
`;

const ListItems = styled.div`
  display: grid;
  overflow: hidden;
  border: 1px solid lightgray;
  box-shadow: ${colours.boxShadow};
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 0.5em;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 6fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 3fr);
  }
  input {
    text-align: center;
    width: 2em;
  }
`;

const ListImg = styled.div`
  overflow: hidden;
  img {
    width: 5em;
    height: 5em;
  }
`;
const ListDetail = styled.div``;
const ListActions = styled.div``;

const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <Container>
      <h3>My Shopping Cart Detail</h3>
      <hr />
      {cart.map((item, key) => {
        const price = parseFloat(item.product.price);
        return (
          <ListItems key={key}>
            <ListImg>
              <img
                src={item.product.api_featured_image}
                alt={`cart-${item.product.name}`}
              />
            </ListImg>
            <ListDetail>{item.product.name}</ListDetail>
            <div>
              <button>-</button>
              <input readOnly value={item.count} />
              <button>+</button> x ${price}
            </div>
            <ListActions>
              <span>={price * item.count}</span>
              <button>X</button>
            </ListActions>
          </ListItems>
        );
      })}
    </Container>
  );
};

export default CartList;
