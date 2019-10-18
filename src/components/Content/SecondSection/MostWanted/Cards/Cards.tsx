import React from "react";
import CardsDesktop from "./CardsDesktop";
import CardsMobile from "./CardsMobile";
import CardsMobileL from "./CardsMobileL";
import CardsTablet from "./CardsTablet";
interface Props {}

const Cards: React.FC<Props> = () => {
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
