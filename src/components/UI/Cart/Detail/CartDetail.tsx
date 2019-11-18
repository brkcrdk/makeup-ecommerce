import React from "react";
import {
  Container,
  ListResult,
  ListActions,
  ListDetail,
  ListImg,
  ListItems
} from "./DetailStyle";
import { IProducts } from "../../../../store/fetchProducts/types";
import { Count, Remove, Name } from "../../../UI/Cart/Carts";
// import { Decrement, Increment, Remove } from "../../Buttons/Button";
interface Props {
  cart: {
    product: IProducts;
    count: number;
  }[];
}

const CartDetail: React.FC<Props> = ({ cart }) => {
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
            {/* <ListDetail>{item.product.name}</ListDetail> */}
            <ListDetail>
              <Name product={item.product} />
            </ListDetail>
            <ListResult>
              <span>Total = ${price * item.count}</span>
            </ListResult>
            <ListActions>
              <Count product={item.product} count={item.count} />x ${price}
              <Remove product={item.product} />
            </ListActions>
          </ListItems>
        );
      })}
    </Container>
  );
};

export default CartDetail;
