import React, { useState, useEffect } from "react";

import { CarouselContainer, CarouselContent } from "./CarouselStyle";

interface Props {}

const Carousel: React.FC<Props> = () => {
  const [wSize, setWSize] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth !== wSize) {
        return setWSize(window.innerWidth);
      } else {
        return wSize;
      }
    });
  }, []);
  if (wSize === 320) {
    console.log("mobileS");
  } else if (wSize > 320 && wSize <= 375) {
    console.log("mobileM");
  } else if (wSize > 375 && wSize <= 425) {
    console.log("MobileL");
  }
  return (
    <CarouselContainer>
      <CarouselContent>
        <li>Eleman1</li>
        <li>Eleman2</li>
        <li>Eleman3</li>
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
