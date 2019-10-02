import React from "react";
import getType from "../../getType";
// import { IProducts } from "../../../store/fetchProducts/types";

import { useSelector } from "react-redux";

interface ProductTypes {
  storeProducts: {
    products: [];
  };
}

const Menu: React.FC = () => {
  const products = useSelector(
    (state: ProductTypes) => state.storeProducts.products
  );
  console.log(getType("brand", products));
  // const productTypes = products
  //   .filter((items: IProducts) => {
  //     return items.brand;
  //   })
  //   .map((x: IProducts) => {
  //     return x.brand;
  //   });
  // //TODO: Filter to get array without duplicates
  // const types = productTypes.filter((value, index, self) => {
  //   return self.indexOf(value) === index;
  // });
  // console.log(types);
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
