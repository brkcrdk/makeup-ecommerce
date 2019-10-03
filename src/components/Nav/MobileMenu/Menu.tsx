import React, { useState } from "react";
import { getCategory, getType } from "../../getTypes";
import { useSelector } from "react-redux";
import {
  AccordionContainer,
  AccordionTitle,
  AccordionContent
} from "./MenuStyle";
import { Link } from "react-router-dom";
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
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <AccordionContainer toggle={toggle}>
      {types.length < 1 ? (
        <AccordionTitle>Loading...</AccordionTitle>
      ) : (
        types.map((item, key) => (
          <Link<any> to={`/${item}`} key={key} onClick={handleClick}>
            <AccordionTitle>{item.replace("_", " ")}</AccordionTitle>
          </Link>
        ))
      )}
    </AccordionContainer>
  );
};
export default Menu;
