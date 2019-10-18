import React from "react";
import CardsDesktop from "./CardsDesktop";
import CardsMobile from "./CardsMobile";
import CardsMobileL from "./CardsMobileL";
import CardsTablet from "./CardsTablet";
import { randomItems } from "../../../../getTypes";
import handleProducts from "../handleProducts";
import { useSelector } from "react-redux";
interface ProductProps {
  storeProducts: {
    products: [];
  };
}

const Cards: React.FC = () => {
  const products = useSelector(
    (state: ProductProps) => state.storeProducts.products
  );
  const randomProducts = randomItems(products);
  console.log(handleProducts(randomProducts, 2));
  //TODO: For mobileS : 1 , mobileM: 1, mobileL: 2
  //TODO: For mobileTablet : 2 ,tablet:3,laptop 3,
  //TODO: For desktop and desktopL: 4
  return (
    <>
      <CardsDesktop />
      <CardsTablet />
      <CardsMobileL />
      <CardsMobile />
    </>
  );
};

export default Cards;
