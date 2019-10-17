import styled from "styled-components";

export const CaroContainer = styled.div`
  width: 100%;
  border: 1px solid green;
  overflow: hidden;
`;

export const Slides = styled.div`
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
export const Indicators = styled.div`
  display: flex;
  align-items: flex-end;
`;
interface IndicatorProps {
  active: number;
  index: number;
}
export const Indicator = styled.span`
  cursor: pointer;
  height: ${(p: IndicatorProps) => (p.active === p.index ? "0.3em" : "0.2em")};
  width: 1.5em;
  margin: 0 2px;
  border: 1px solid black;
  background-color: ${(p: IndicatorProps) =>
    p.active === p.index ? "grey" : "transparent"};
  border-radius: 5%;
  transition: background-color 0.6s ease;
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

export const Next = styled.a`
  ${buttonStyles}
  left: 1em;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const Prev = styled.a`
  ${buttonStyles}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
