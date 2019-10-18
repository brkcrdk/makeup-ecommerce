import React from "react";
import { Container, Header } from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import handleProducts from "./handleProducts";
import { useSelector } from "react-redux";
import Cards from "./Cards/Cards";
// import Carousel from "../../../UI/Carousel/Carousel";
// import Card from "../../../UI/Card/Card";
interface ProductProps {
  storeProducts: {
    products: [];
  };
}

const Wanted: React.FC = () => {
  const products = useSelector(
    (state: ProductProps) => state.storeProducts.products
  );
  const randomProducts = randomItems(products);
  console.log(handleProducts(randomProducts, 2));
  //TODO: For mobileS : 1 , mobileM: 1, mobileL: 2
  //TODO: For mobileTablet : 2 ,tablet:3,laptop 3,
  //TODO: For desktop and desktopL: 4
  return (
    <Container>
      <Header>Most Search Items</Header>
      <Cards />
    </Container>
  );
};

export default Wanted;
