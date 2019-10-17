import React, { useState } from "react";
import styled from "styled-components";
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
      opacity: 0.3;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes prev {
    from {
      transform: translateX(-150%);
      opacity: 0.3;
    }
    to {
      transform: translateX(0);
      opacity: 1;
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
  const [initialX, setInitialX] = useState(0);
  const [diff, setDiff] = useState(0);
  const [direction, setDirection] = useState("not moved");

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

  //Drag actions
  //Mouse actions
  const mouseStart = (e: React.MouseEvent) => {
    setInitialX(e.pageX);
  };
  const mouseEnd = (e: React.MouseEvent, index: number) => {
    setDiff(e.pageX);
    handleDiff(index);
  };
  //Touch actions
  const touchStart = (e: React.TouchEvent) => {
    setInitialX(e.touches[0].pageX);
  };
  const touchEnd = (e: React.TouchEvent, index: number) => {
    setDiff(e.touches[0].pageX);
    handleDiff(index);
  };

  const handleDiff = (n: number) => {
    if (initialX - diff === 0) {
      setDirection("not moved");
    } else if (initialX - diff <= -1) {
      if (active === n) {
        setActive(n);
      } else {
        setActive(active - 1);
      }
      setDirection("next");
    } else if (initialX - diff >= 1) {
      setDirection("prev");
      if (n === 0) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }
  };
  console.log(direction);
  const slides = React.Children.map(children, (slides, index) => (
    <SlideContent
      active={active}
      index={index}
      direction={direction}
      onMouseDown={mouseStart}
      onMouseUp={(e: React.MouseEvent) =>
        mouseEnd(e, React.Children.count(children))
      }
      onTouchStart={touchStart}
      onTouchMove={(e: React.TouchEvent) =>
        touchEnd(e, React.Children.count(children))
      }>
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
