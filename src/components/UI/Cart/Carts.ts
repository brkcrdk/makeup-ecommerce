import CartDetail from "./Detail/CartDetail";
import CartHover from "./Hover/CartHover";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Remove from "./Remove";
import Name from "./Name";
import Count from "./Count";
import Image from "./Image";
import { IProducts } from "../../../store/fetchProducts/types";

const total = (cart: { product: IProducts; count: number }[]) => {
  const totals = cart.map((item) => {
    const price = parseFloat(item.product.price);
    return price * item.count;
  });
  return totals.reduce((sum, next) => {
    return (sum = sum + next);
  });
};

export {
  CartDetail,
  CartHover,
  Increment,
  Decrement,
  Remove,
  Name,
  Count,
  Image,
  total
};
