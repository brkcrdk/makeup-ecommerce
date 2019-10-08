import React, { useState } from "react";

import { CarouselContainer, CarouselContent } from "./CarouselStyle";

interface Props {}

const Carousel: React.FC<Props> = () => {
  return (
    <CarouselContainer>
      <CarouselContent>
        <li>Eleman1</li>
        <li>Eleman2</li>
      </CarouselContent>
      <CarouselContent>
        <li>Eleman3</li>
        <li>Eleman4</li>
      </CarouselContent>
      <CarouselContent>
        <li>Eleman5</li>
        <li>Eleman6</li>
      </CarouselContent>
      <CarouselContent>
        <li>Eleman7</li>
        <li>Eleman8</li>
      </CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;
