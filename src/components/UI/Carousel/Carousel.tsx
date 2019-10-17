import React, { useState } from "react";
import styled from "styled-components";
import BrandMobile from "../../Content/SecondSection/Brands/BrandMobileS";
const CaroContainer = styled.div`
  width: 100%;
  border: 1px solid green;
  overflow: hidden;
`;

const Slides = styled.div`
  border: 1px solid red;
  width: 100%;
`;
interface ContentProps {
  active: number;
  index: number;
  direction: string;
}

export const SlideContent = styled.div`
  border: 1px solid blue;
  width: 100%;
  img {
    width: 100%;
    height: 10em;
  }
  display: ${(p: ContentProps) => (p.active === p.index ? "block" : "none")};
  animation-name: ${(p: ContentProps) =>
    p.direction === "next" ? "next" : "prev"};
  animation-duration: 1s;
  animation-iteration-count: 1;
  @keyframes next {
    from {
      transform: translateX(150%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes prev {
    from {
      transform: translateX(-150%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Indicators = styled.div`
  display: flex;
`;
export const Indicator = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;
interface CaroTypes {
  children: React.ReactNode;
}
const Carousel: React.FC<CaroTypes> = ({ children }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");
  const handleIndicator = (n: number) => {
    if (n !== active) {
      if (active > n) {
        setDirection("next");
      } else {
        setDirection("prev");
      }
      return setActive(n);
    }
  };

  console.log(direction);

  const slides = React.Children.map(children, (slides, index) => (
    <SlideContent active={active} index={index} direction={direction}>
      {slides}
    </SlideContent>
  ));
  const indicators = React.Children.map(children, (child, index) => (
    <Indicator onClick={() => handleIndicator(index)} />
  ));

  return (
    <CaroContainer>
      <Indicators>{indicators}</Indicators>
      <Slides>{slides}</Slides>
    </CaroContainer>
  );
};

export default Carousel;
