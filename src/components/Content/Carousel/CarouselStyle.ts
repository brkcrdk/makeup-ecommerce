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
  overflow-x: auto;
`;

export const CarouselContent = styled.ul`
  width: 100%;
  height: 100%;
  border: 1px solid green;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
`;
export const CarouselItem = styled.li``;
export const CarouselImg = styled.img``;

export const CarouselText = styled.p``;

export const Icons = styled.img``;

export const DotWrapper = styled.div``;
export const Dots = styled.span``;
