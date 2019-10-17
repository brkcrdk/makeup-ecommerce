import React, { useState } from "react";
import {
  Container,
  Header,
  CaroContainer,
  Slides,
  SlideContent
} from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import { useSelector } from "react-redux";
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
  const [active, setActive] = useState(1);

  return (
    <Container>
      <Header>Most Search Items</Header>
      <CaroContainer>
        <Slides>
          <SlideContent active={active} index={0}>
            <img src="https://picsum.photos/200/300" alt="" />
            <span>0</span>
          </SlideContent>
          <SlideContent active={active} index={1}>
            <img src="https://picsum.photos/200/300" alt="" />
            <span>1</span>
          </SlideContent>
          <SlideContent active={active} index={2}>
            <img src="https://picsum.photos/200/300" alt="" />
            <span>2</span>
          </SlideContent>
          <SlideContent active={active} index={3}>
            <img src="https://picsum.photos/200/300" alt="" />
            <span>3</span>
          </SlideContent>
          <SlideContent active={active} index={4}>
            <img src="https://picsum.photos/200/300" alt="" />
            <span>4</span>
          </SlideContent>
        </Slides>
      </CaroContainer>
    </Container>
  );
};

export default Wanted;
