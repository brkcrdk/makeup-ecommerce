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
  const [diff, setDiff] = useState("not moved");
  const [end, setEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const mouseStart = (e: React.MouseEvent) => {
    setIsDown(true);
    if (sliderRef && sliderRef.current) {
      setStart(e.pageX - sliderRef.current.offsetLeft);
    }
  };
  const mouseEnd = (e: React.MouseEvent) => {
    setIsDown(false);
    // if (!isDown) return;
    e.preventDefault();

    if (sliderRef && sliderRef.current) {
      setEnd(e.pageX - sliderRef.current.offsetLeft);
    }
    console.log({ end, start });
    console.log(`diff: ${end - start}`);
    if (end - start <= 15 && end - start >= -15) {
      console.log("not-moved");
    } else if (end - start > 16) {
      console.log("right");
      handleNext();
    } else if (end - start < -16) {
      console.log("left");
      handlePrev();
    }
  };
  const mouseLeave = () => {
    setIsDown(false);
  };

  const mouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
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
      onMouseMove={mouseMove}>
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
