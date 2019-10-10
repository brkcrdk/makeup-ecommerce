import React, { useState, useEffect } from "react";
import { Carosel } from "./CarouselStyle";
interface CarouselProps {
  content: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}
const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const [embla, setEmbla] = useState<any>(null);
  useEffect(() => {
    if (embla) {
      embla.on("select", () => {
        console.log(`Current index is ${embla.selectedScrollSnap()}`);
      });
    }
  }, [embla]);
  return (
    <>
      <Carosel emblaRef={setEmbla} options={{ loop: true }}>
        {content}
      </Carosel>
      <button onClick={() => embla.scrollPrev()}>Prev</button>
      <button onClick={() => embla.scrollNext()}>Next</button>
    </>
  );
};

export default Carousel;
