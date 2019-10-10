import React, { useState, useEffect } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { Carosel } from "./CarouselStyle";

const Carousel: React.FC = () => {
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
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 100%" }}>Slide 1</div>
          <div style={{ flex: "0 0 100%" }}>Slide 2</div>
          <div style={{ flex: "0 0 100%" }}>
            <li>
              <a href="#?">Burak</a>
            </li>
            <li>
              <a href="#?">Burak</a>
            </li>
          </div>
        </div>
      </Carosel>
      <button onClick={() => embla.scrollPrev()}>Prev</button>
      <button onClick={() => embla.scrollNext()}>Next</button>
    </>
  );
};

export default Carousel;
