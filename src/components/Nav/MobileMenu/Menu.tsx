import React from "react";
import { getType, getCategory } from "../../getTypes";
import { useSelector } from "react-redux";
import {
  AccordionContainer,
  AccordionTitle,
  AccordionContent
} from "./MenuStyle";
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
          <Link<any> to={`/${item}`} key={key}>
            <AccordionTitle>{item.replace("_", " ")}</AccordionTitle>
            <AccordionContent>
              {getCategory(products, `${item}`).map((item, index) =>
                item !== null ? <p key={index}>{item.replace("_", " ")}</p> : ""
              )}
            </AccordionContent>
          </Link>
        ))
      )}
    </AccordionContainer>
  );
};
export default Menu;
