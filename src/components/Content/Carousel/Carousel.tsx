import React, { useState, useEffect, ReactElement } from "react";

import { Carosel } from "./CarouselStyle";
interface CarouselProps {
  content: ReactElement<React.FunctionComponent>;
  loop?: boolean;
}
const Carousel: React.FC<CarouselProps> = ({ content, loop }) => {
  const [embla, setEmbla] = useState<any>(null);
  useEffect(() => {
    if (embla) {
      embla.on("select", () => {
        //Use want to log current index
        // console.log(`Current index is ${embla.selectedScrollSnap()}`);
      });
    }
  }, [embla]);

  return (
    <>
      <Carosel emblaRef={setEmbla} options={{ loop }}>
        {content}
      </Carosel>
    </>
  );
};

export default Carousel;
