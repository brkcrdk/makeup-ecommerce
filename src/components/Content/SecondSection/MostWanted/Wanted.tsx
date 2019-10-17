import React from "react";
import { Container, Header } from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import { useSelector } from "react-redux";
import Carousel from "../../../UI/Carousel/Carousel";
import img1 from "../Brands/images/1.jpg";
import img2 from "../Brands/images/2.jpg";
import img3 from "../Brands/images/3.jpg";
import img4 from "../Brands/images/4.jpg";
import img5 from "../Brands/images/5.jpg";
import img6 from "../Brands/images/6.jpg";
const images = [img1, img2, img3, img4, img5, img6];

interface ProductProps {
  storeProducts: {
    products: [];
  };
}

const Wanted: React.FC = () => {
  const products = useSelector(
    (state: ProductProps) => state.storeProducts.products
  );
  console.log(randomItems(products, 10));

  return (
    <Container>
      <Header>Most Search Items</Header>
      <Carousel>
        <div>
          <p>Burak</p>
          <span>Çardak</span>
        </div>
        <div>
          <p>Burak</p>
          <span>Çardak</span>
        </div>
      </Carousel>
    </Container>
  );
};

export default Wanted;
