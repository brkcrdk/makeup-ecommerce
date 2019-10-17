import styled from "styled-components";

export const CaroContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Slides = styled.div`
  width: 100%;
`;

interface ContentProps {
  active: number;
  index: number;
  direction: string;
}

export const SlideContent = styled.div`
  width: 100%;
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
  justify-content: center;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const buttonStyles = `
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  width: auto;
  color: red;
  font-weight: bold;
  font-size: 1.2em;
  transition: 0.6s ease;
  user-select: none;
  outline:none;
  background:transparent;
  border:none;
  height:5em;
`;

export const Next = styled.button`
  ${buttonStyles}
  left:72%;
`;
export const Prev = styled.button`
  ${buttonStyles}
`;
