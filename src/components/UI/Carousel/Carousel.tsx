import React, { useState, useEffect, useRef } from "react";
import {
  Indicator,
  CaroContainer,
  SlideContent,
  Slides,
  Indicators,
  Prev,
  Next,
  ButtonContainer,
  Content
} from "./CarouselStyle";

interface CaroTypes {
  children: React.ReactNode;
  display?: "display" | "hide";
}

const Carousel: React.FC<CaroTypes> = ({ children, display = "display" }) => {
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

  //Drag actions & states here

  const carouselRef = useRef<HTMLDivElement>(null);
  const [carousel, setCarousel] = useState();
  useEffect(() => {
    if (carouselRef && carouselRef.current) {
      setCarousel(carouselRef);
    }
  }, []);

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const mouseDown = (e: React.MouseEvent) => {
    setStartX(e.pageX);
  };
  const mouseUp = (e: React.MouseEvent) => {
    setEndX(e.pageX);
    alert(`start:${startX} end:${endX}`);
    if (startX > endX) {
      alert("left");
    } else if (startX < endX) {
      alert("right");
    } else if (startX - endX === 0) {
      alert("not moved");
    }
  };
  const mouseMove = (e: React.MouseEvent) => {
    // console.log(`start: ${startX}`);
    // console.log(`end:${endX}`);
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
    <CaroContainer
      onMouseMove={mouseMove}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <Content>
        <Slides ref={carouselRef}>{slides}</Slides>
        <ButtonContainer display={display}>
          <Prev onClick={handlePrev}>&#x2770;</Prev>
          <Next onClick={handleNext}>&#x2771;</Next>
        </ButtonContainer>
        {/* TODO: Use indicator-container to adjust indicator margin */}
        <Indicators className="indicator-container">{indicators}</Indicators>
      </Content>
    </CaroContainer>
  );
};

export default Carousel;
