import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  padding-top: 1em;
  width: 70%;
  overflow: hidden;
`;

interface Carousel {
  show: number;
  index: number;
}
export const CarouselItem = styled.div`
  display: ${(p: Carousel) => (p.show === p.index ? "flex" : "none")};
  width: 70%;
  height: 20em;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CarouselText = styled.div``;

const prevNext = `
  cursor:pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
`;
const scale = `
scale(1.2, 1.2);
`;
export const Next = styled.a`
  ${prevNext}
  right: 0;
  border-radius: 3px 0 0 3px;
  color: yellow;
  &:hover {
    transform: ${scale};
  }
`;
export const Prev = styled.a`
  ${prevNext}
  color:red;
  &:hover {
    transform: ${scale};
  }
`;

export const Icons = styled.img`
  width: 2em;
  height: 2em;
`;

export const Dots = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${(p: Carousel) =>
    p.show === p.index ? "#717171" : "#bbb"};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
`;
