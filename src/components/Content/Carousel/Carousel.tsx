import React, { useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import {
  CarouselContainer,
  CarouselItem,
  CarouselImg,
  CarouselText,
  Dots,
  DotWrapper,
  CarouselContent
} from "./CarouselStyle";

interface Props {}

const Carousel: React.FC<Props> = () => {
  const slides = [
    { img: img1, info: "Blushes" },
    { img: img2, info: "Foundations" },
    { img: img3, info: "Lip Liners" },
    { img: img4, info: "Bronzers" },
    { img: img5, info: "Mascaras & All other stuff." },
    { img: img6, info: "" }
  ];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < slides.length - 1) return setIndex(index + 1);
    return setIndex(0);
  };
  const handlePrev = () => {
    if (index === 0) return setIndex(slides.length - 1);
    setIndex(index - 1);
  };

  return (
    <CarouselContainer>
      <CarouselContent>
        <CarouselItem>
          {slides.map((item, key) => (
            <CarouselImg src={item.img} key={key} />
          ))}
        </CarouselItem>
      </CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;
