import React, { useState, useEffect } from "react";
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
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  @keyframes next {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes prev {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
const buttonStyles = `
  cursor: pointer;
  position: relative;
  top: 50%;
  width: auto;
  padding: 16px;
  color: red;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

`;

const Next = styled.a`
  ${buttonStyles}
  left: 1em;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Prev = styled.a`
  ${buttonStyles}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Indicators = styled.div`
  display: flex;
`;
interface IndicatorProps {
  active: number;
  index: number;
}
const Indicator = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${(p: IndicatorProps) =>
    p.active === p.index ? "#a8a8a8" : "#000"};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;
interface CaroTypes {
  children: React.ReactNode;
}
const Carousel: React.FC<CaroTypes> = ({ children }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("not moved");
  const [count, setCount] = useState(0);
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
  useEffect(() => {
    setCount(React.Children.count(children));
  }, []);

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
      <Indicators>{indicators}</Indicators>
      <Slides>{slides}</Slides>
      <Prev onClick={handlePrev}>Prev</Prev>
      <Next onClick={handleNext}>Next</Next>
    </CaroContainer>
  );
};

export default Carousel;
