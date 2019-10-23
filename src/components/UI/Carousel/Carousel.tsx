import React, { useState, useEffect, useRef } from "react";
import { handleNext, handlePrev, handleIndicator, mouseStart } from "./handles";
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
  //Carousel States
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("not moved");
  const [count, setCount] = useState(0);

  //Slide action states
  const [isDown, setIsDown] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCount(React.Children.count(children));
  }, [count, children]);

  //Swipe action for carousel

  //FOR MOUSE ACTIONS
  // const mouseStart = (e: React.MouseEvent) => {
  //   setIsDown(true);
  //   if (sliderRef && sliderRef.current) {
  //     setStart(e.pageX - sliderRef.current.offsetLeft);
  //   }
  // };
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
      handleNext(count, active, setActive);
    } else if (end - start <= -15) {
      handlePrev(count, active, setActive);
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
    if (touchEndX - touchStartX > 0) {
      handleNext(count, active, setActive);
    } else if (touchEndX - touchStartX < 0) {
      handlePrev(count, active, setActive);
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
      onClick={() => handleIndicator(index, active, setDirection, setActive)}
      active={active}
      index={index}
    />
  ));

  return (
    <CaroContainer
      ref={sliderRef}
      onMouseDown={(e: React.MouseEvent) => {
        mouseStart(e, setIsDown, sliderRef, setStart);
      }}
      onMouseUp={mouseEnd}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}>
      <Content>
        <Slides>{slides}</Slides>
        <ButtonContainer display={display}>
          <Prev
            onClick={() => {
              handlePrev(active, count, setActive);
            }}>
            &#x2770;
          </Prev>
          <Next
            onClick={() => {
              handleNext(count, active, setActive);
            }}>
            &#x2771;
          </Next>
        </ButtonContainer>
        {/* TODO: Use indicator-container to adjust indicator margin */}
        <Indicators className="indicator-container">{indicators}</Indicators>
      </Content>
    </CaroContainer>
  );
};

export default Carousel;
