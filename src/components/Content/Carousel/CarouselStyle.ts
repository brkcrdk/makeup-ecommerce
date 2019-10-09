import styled from "styled-components";
// interface Carousel {
//   show: number;
//   index: number;
// }

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  overflow-x: hidden;
  padding: 2em;
`;
interface CarouselProps {
  index: number;
  show: number;
}
export const CarouselContent = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid green;
  flex-shrink: 0;
  display: ${(p: CarouselProps) => (p.index === p.show ? "grid" : "none")};
  grid-template-columns: 4fr 4fr 4fr;
  * {
    display: flex;
    justify-content: space-around;
    margin: 0 1em;
  }
`;
export const CarouselItem = styled.li``;
export const CarouselImg = styled.img``;

export const CarouselText = styled.p``;

export const Icons = styled.img``;

export const DotWrapper = styled.div``;
export const Dots = styled.span``;
