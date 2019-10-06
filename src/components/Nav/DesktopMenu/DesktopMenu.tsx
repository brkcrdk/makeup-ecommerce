import React from "react";
import { MenuContainer } from "./DesktopStyle";
import Dropdown from "./Dropdown/Dropdown";
import { getBrand, getCategory, getType } from "../../getTypes";
import { useSelector } from "react-redux";
interface StoreProps {
  storeProducts: {
    products: [];
  };
}

const DesktopMenu: React.FC = () => {
  const products = useSelector(
    (state: StoreProps) => state.storeProducts.products
  );
  const brands = getBrand(products);
  const categories = getCategory(products);
  const types = getType(products);
  return (
    <MenuContainer>
      <Dropdown title="Brands" content={brands} />
      <Dropdown title="Categories" content={categories} />
      <Dropdown title="Types" content={types} />
    </MenuContainer>
  );
};

export default DesktopMenu;
