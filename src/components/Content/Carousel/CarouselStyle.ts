import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  padding-top: 1em;
  width: 20em;
  height: 20em;
  border: 1px solid red;
`;

interface Carousel {
  show: number;
  index: number;
}
export const CarouselItem = styled.div`
  display: ${(p: Carousel) => (p.show === p.index ? "block" : "none")};
`;

export const CarouselImg = styled.img`
  width: 100%;
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
export const Next = styled.a`
  ${prevNext}
  right: 0;
  border-radius: 3px 0 0 3px;
  color: yellow;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const Prev = styled.a`
  ${prevNext}
  color:red;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
