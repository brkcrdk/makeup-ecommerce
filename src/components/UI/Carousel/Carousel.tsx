import React, { useState, useEffect } from "react";
import {
  Indicator,
  CaroContainer,
  SlideContent,
  Slides,
  Indicators,
  Prev,
  Next,
  ButtonContainer
} from "./CarouselStyle";

interface CaroTypes {
  children: React.ReactNode;
}
const Carousel: React.FC<CaroTypes> = ({ children }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("not moved");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(React.Children.count(children));
  }, [count, children]);
  //Indicator actions
  const handleIndicator = (n: number) => {
    if (n !== active) {
      if (active < n) {
        setDirection("next");
      } else {
        setDirection("prev");
      }
      return setActive(n);
    }
  };
  //Button actions
  const handleNext = () => {
    if (active === count - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  const handlePrev = () => {
    if (active === 0) {
      setActive(count - 1);
    } else {
      setActive(active - 1);
    }
  };

  //Rendering starts here
  const slides = React.Children.map(children, (slides, index) => (
    <SlideContent active={active} index={index} direction={direction}>
      {slides}
    </SlideContent>
  ));

  const indicators = React.Children.map(children, (child, index) => (
    <Indicator
      onClick={() => handleIndicator(index)}
      active={active}
      index={index}
    />
  ));
  return (
    <CaroContainer>
      <Slides>{slides}</Slides>
      <ButtonContainer>
        <Prev onClick={handlePrev}>&#x2770;</Prev>
        <Next onClick={handleNext}>&#x2771;</Next>
      </ButtonContainer>
      <Indicators>{indicators}</Indicators>
    </CaroContainer>
  );
};

export default Carousel;
