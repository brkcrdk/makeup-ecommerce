import React from "react";
import { getType } from "../../getTypes";
import { useSelector } from "react-redux";
import { AccordionContainer, AccordionTitle } from "./MenuStyle";

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
        <p>Loading...</p>
      ) : (
        types.map((item, key) => (
          <AccordionTitle key={key}>{item.replace("_", " ")}</AccordionTitle>
        ))
      )}
    </AccordionContainer>
  );
};
export default Menu;
