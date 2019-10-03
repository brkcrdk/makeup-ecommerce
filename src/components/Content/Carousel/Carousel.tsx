import React, { useState, useEffect } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import {
  CarouselContainer,
  CarouselItem,
  CarouselImg,
  CarouselText,
  Next,
  Prev,
  Dots,
  DotWrapper
} from "./CarouselStyle";

interface Props {}

const Carousel: React.FC<Props> = () => {
  const slides = [
    { img: img1, info: "Blushes" },
    { img: img2, info: "Foundations" },
    { img: img3, info: "Lip Liners" },
    { img: img4, info: "Bronzers" },
    { img: img5, info: "Mascaras & All other stuff." }
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
      {slides.map((item, key) => (
        <CarouselItem key={key} show={key} index={index}>
          <CarouselImg src={item.img} />
          <CarouselText>{item.info}</CarouselText>
        </CarouselItem>
      ))}
      <Next onClick={handleNext}>&#8250;</Next>
      <Prev onClick={handlePrev}>&#8249;</Prev>
      <DotWrapper>
        {slides.map((item, key) => (
          <Dots show={key} index={index} key={key} />
        ))}
      </DotWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
