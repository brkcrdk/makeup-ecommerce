import React from "react";
import styled from "styled-components";
import { device, colours, fonts } from "../utils";
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

  h3 {
    font-family: ${fonts.raleway};
  }
`;

const ListItems = styled.div`
  display: grid;
  overflow: hidden;
  font-family: ${fonts.aBeeZee};
  border: 1px solid lightgray;
  box-shadow: ${colours.boxShadow};
  border-radius: 0.3em;
  margin: 1em 0;
  padding: 0.5em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileS} {
    grid-template-columns: 5fr 7fr;
    grid-gap: 0.5em;
    font-size: 0.9em;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 3fr);
    font-size: 1em;
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
const ListActions = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const ListResult = styled.div``;
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
            <ListResult>
              <span>Total = ${price * item.count}</span>
            </ListResult>
            <ListActions>
              <button>
                <i className="fas fa-minus" />
              </button>
              <span>{item.count}</span>
              <button>
                <i className="fas fa-plus" />
              </button>
              x ${price}
              <button>
                <i className="fas fa-trash" />
              </button>
            </ListActions>
          </ListItems>
        );
      })}
    </Container>
  );
};

export default CartList;
