import React from "react";
import { getType } from "../../getTypes";
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

  return (
    <Container toggle={toggle}>
      <Acordion title={"Burak"} content={types} />
      {/* {types.length < 1 ? (
        <AccordionTitle>Loading...</AccordionTitle>
      ) : (
        types.map((item, key) => (
          <Link<any> to={`/${item}`} key={key}>
            <AccordionTitle>{item.replace("_", " ")}</AccordionTitle>
          </Link>
        ))
      )} */}
    </Container>
  );
};
export default Menu;
