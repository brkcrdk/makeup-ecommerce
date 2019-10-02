import React, { useState } from "react";
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
          //Map item types
          <Link<any> to={`/${item}`} key={key} onClick={handleClick}>
            {/* Get rid of underlines */}
            <AccordionTitle>{item.replace("_", " ")}</AccordionTitle>
            {/* Map every item with getCategory function will 
            returns every sub category for that product*/}

            {getCategory(products, `${item}`).map((item, index) =>
              //Some products will return of category
              //if category is null return nothing..
              item !== null ? (
                <AccordionContent isActive={active}>
                  <Link to={`/${item}`} key={index}>
                    {item.replace("_", " ")}
                  </Link>
                </AccordionContent>
              ) : (
                ""
              )
            )}
          </Link>
        ))
      )}
    </AccordionContainer>
  );
};
export default Menu;
