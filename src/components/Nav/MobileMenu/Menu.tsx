import React from "react";
import { getType, getCategory, getBrand } from "../../getTypes";
import { useSelector, useDispatch } from "react-redux";
import { Container, SearchClose } from "./MenuStyle";
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
  // const dispatch = useDispatch();
  // const handleClose = useCallback(() => {
  //   dispatch({
  //     type: "TOGGLE_SIDEBAR"
  //   });
  // }, [dispatch]);
  return (
    <Container toggle={toggle}>
      <SearchClose>
        <input placeholder="Search here..." />
        {/* <span onClick={handleClose}>X</span> */}
      </SearchClose>

      <Acordion title={"Types"} content={types} activeIndex={0} />
      <Acordion title={"Categories"} content={categories} activeIndex={1} />
      <Acordion title={"Brand"} content={brands} activeIndex={2} />
    </Container>
  );
};
export default Menu;
