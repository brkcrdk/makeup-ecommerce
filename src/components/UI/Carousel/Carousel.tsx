import React, { useState, useEffect } from "react";
import {
  Indicator,
  CaroContainer,
  SlideContent,
  Slides,
  Indicators,
  Prev,
  Next
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
  }, []);
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
      <Prev onClick={handlePrev}>&#10094;</Prev>
      <Next onClick={handleNext}>&#10095;</Next>
      <Indicators>{indicators}</Indicators>
    </CaroContainer>
  );
};

export default Carousel;
