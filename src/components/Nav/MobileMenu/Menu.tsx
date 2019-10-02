import React from "react";
import { IProducts } from "../../../store/fetchProducts/types";

import { useSelector } from "react-redux";

interface ProductTypes {
  storeProducts: {
    products: [];
    isLoading: boolean;
    error: null | {};
  };
}

const Menu: React.FC = () => {
  const products = useSelector(
    (state: ProductTypes) => state.storeProducts.products
  );
  const productTypes = products
    .filter((items: IProducts) => {
      return items.product_type;
    })
    .map((x: IProducts) => {
      return x.product_type;
    });
  console.log(productTypes);
  return (
    <ul>
      <li>Menu</li>
      <li>Menu</li>
      <li>Menu</li>
      <li>Menu</li>
      <li>Menu</li>
    </ul>
  );
};
export default Menu;
