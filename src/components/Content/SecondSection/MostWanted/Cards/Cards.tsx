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
  const randomProducts = randomItems(products, 12);
  const productsMobileL = handleProducts(randomProducts, 6);
  const productsTablet = handleProducts(randomProducts, 4);
  const productsDesktop = handleProducts(randomProducts, 3);
  //TODO: For mobileS : 1 , mobileM: 1, mobileL: 2
  //TODO: For mobileTablet : 2 ,tablet:3,laptop 3,
  //TODO: For desktop and desktopL: 4
  return (
    <>
      <CardsDesktop products={productsDesktop} />
      <CardsTablet products={productsTablet} />
      <CardsMobileL products={productsMobileL} />
      <CardsMobile products={randomProducts} />
    </>
  );
};

export default Cards;
