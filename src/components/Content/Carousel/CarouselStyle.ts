import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 85%;
  padding: 0;
  margin: 0;
`;

interface Carousel {
  show: number;
  index: number;
}
export const CarouselItem = styled.div`
  display: ${(p: Carousel) => (p.show === p.index ? "flex" : "none")};
  height: 30vh;

  animation: fade;
  animation-duration: 2s;
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CarouselImg = styled.img`
  border-radius: 0.5em;
  width: 100%;
`;

export const CarouselText = styled.p`
  color: black;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

const prevNext = `
  cursor:pointer;
  position: absolute;
  top: 50%;
  width: auto;
  height:50%;
  margin-top: -1.5em;
  padding: 0.5em;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  color:black;
  font-size:3em;
`;
const scale = `
scale(1.2, 1.2);
`;
export const Next = styled.a`
  ${prevNext}
  right:-0.5em;
  border-radius: 0;
  &:hover {
    transform: ${scale};
  }
`;
export const Prev = styled.a`
  ${prevNext};
  left: -0.5em;
  &:hover {
    transform: ${scale};
  }
`;

export const Icons = styled.img`
  width: 2em;
  height: 2em;
`;
export const DotWrapper = styled.div`
  text-align: center;
`;
export const Dots = styled.span`
  cursor: pointer;
  height: 0.5em;
  width: 0.5em;
  margin: 1em 0.5em 0 0.5em;
  background-color: ${(p: Carousel) =>
    p.show === p.index ? "#717171" : "#bbb"};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
`;
