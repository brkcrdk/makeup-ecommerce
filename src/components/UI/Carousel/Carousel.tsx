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
}
const SlideContent = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: ${(p: ContentProps) => (p.active === p.index ? "block" : "none")};
`;

const Indicators = styled.div`
  display: flex;
`;
const Indicator = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;
const Carousel: React.FC = () => {
  const [active, setActive] = useState(1);

  const handleIndicator = (n: number) => {
    if (n !== active) {
      return setActive(n);
    }
  };
  return (
    <CaroContainer>
      <Indicators>
        <Indicator onClick={() => handleIndicator(0)} />
        <Indicator onClick={() => handleIndicator(1)} />
      </Indicators>
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
  );
};

export default Carousel;
