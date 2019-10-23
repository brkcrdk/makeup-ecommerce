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
  //Swipe action for carousel
  const [isDown, setIsDown] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  //FOR MOUSE ACTIONS
  const mouseStart = (e: React.MouseEvent) => {
    setIsDown(true);
    if (sliderRef && sliderRef.current) {
      setStart(e.pageX - sliderRef.current.offsetLeft);
    }
  };
  const mouseEnd = (e: React.MouseEvent) => {
    setIsDown(false);
    e.preventDefault();
    //This is for typescript.
    //ıf dont use this you get "object is null" error
    if (sliderRef && sliderRef.current) {
      setEnd(e.pageX - sliderRef.current.offsetLeft);
    }
    //If difference smaller then +- 15 dont move
    if (end - start >= 15) {
      handleNext();
    } else if (end - start <= -15) {
      handlePrev();
    }
  };
  //If mouse goes over slider stop action
  const mouseLeave = () => {
    setIsDown(false);
  };
  //When mouse move stop selecting text and images
  const mouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
  };

  //FOR TOUCHSCREEN ACTIONS
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const touchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].pageX);
  };
  const touchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].pageX);
    console.log({ touchStartX, touchEndX });
    console.log(`diff:${touchStartX - touchEndX}`);
    if (touchEndX - touchStartX > 0) {
      handleNext();
    } else if (touchEndX - touchStartX < 0) {
      handlePrev();
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
    <CaroContainer
      ref={sliderRef}
      onMouseDown={mouseStart}
      onMouseUp={mouseEnd}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}>
      <Content>
        <Slides>{slides}</Slides>
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
