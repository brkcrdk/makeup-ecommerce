import React from "react";
import { getType } from "../../getTypes";
import { useSelector } from "react-redux";
import { AccordionContainer, AccordionTitle } from "./MenuStyle";
import { Link } from "react-router-dom";
interface ProductTypes {
  storeProducts: {
    products: [];
  };
  storeSidebarToggle: {
    sideToggle: boolean;
  };
}

const Menu: React.FC = () => {
  const toggle = useSelector(
    (state: ProductTypes) => state.storeSidebarToggle.sideToggle
  );
  const products = useSelector(
    (state: ProductTypes) => state.storeProducts.products
  );
  const types = getType(products);

  return (
    <AccordionContainer toggle={toggle}>
      {types.length < 1 ? (
        <AccordionTitle>Loading...</AccordionTitle>
      ) : (
        types.map((item, key) => (
          <Link<any> to="/products" key={key}>
            <AccordionTitle>{item.replace("_", " ")}</AccordionTitle>
          </Link>
        ))
      )}
    </AccordionContainer>
  );
};
export default Menu;
