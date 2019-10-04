import React from "react";
import { getType, getCategory, getBrand } from "../../getTypes";
import { useSelector } from "react-redux";
import { Container } from "./MenuStyle";
import { Link } from "react-router-dom";
import Acordion from "./Accordion/Acordion";
interface ProductTypes {
  sidebarToggle: {
    sideToggle: boolean;
  };
  storeProducts: {
    products: [];
  };
}

const Menu: React.FC = () => {
  const toggle = useSelector(
    (state: ProductTypes) => state.sidebarToggle.sideToggle
  );
  const products = useSelector(
    (state: ProductTypes) => state.storeProducts.products
  );
  const types = getType(products);
  const categories = getCategory(products);
  const brands = getBrand(products);
  return (
    <Container toggle={toggle}>
      <Acordion title={"Types"} content={types} activeIndex={0} />
      <Acordion title={"Categories"} content={categories} activeIndex={1} />
      <Acordion title={"Brand"} content={brands} activeIndex={2} />
    </Container>
  );
};
export default Menu;
