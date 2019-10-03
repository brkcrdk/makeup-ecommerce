import React, { useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import left from "./left.png";
import right from "./right.png";
import {
  CarouselContainer,
  CarouselItem,
  CarouselImg,
  CarouselText,
  Next,
  Prev,
  Icons,
  Dots
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
  //Autoslide
  setTimeout(() => {
    handleNext();
  }, 3000);
  return (
    <CarouselContainer>
      {slides.map((item, key) => (
        <CarouselItem key={key} show={key} index={index}>
          <CarouselImg src={item.img} />
          <CarouselText>{item.info}</CarouselText>
        </CarouselItem>
      ))}
      <Next onClick={handleNext}>
        <Icons src={right} />
      </Next>
      <Prev onClick={handlePrev}>
        <Icons src={left} />
      </Prev>
      {slides.map((item, key) => (
        <Dots show={key} index={index} key={key} />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
