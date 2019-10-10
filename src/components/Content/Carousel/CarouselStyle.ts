import styled from "styled-components";
import EmblaCarouselReact from "embla-carousel-react";

// interface Carousel {
//   show: number;
//   index: number;
// }

export const Carosel = styled(EmblaCarouselReact)`
  display: flex;
  border: 1px solid red;
  * {
    flex: 0, 0, 100%;
    cursor: grab;
  }
`;
