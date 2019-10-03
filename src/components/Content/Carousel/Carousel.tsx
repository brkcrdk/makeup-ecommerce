import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import {
  CarouselContainer,
  CarouselItem,
  CarouselImg,
  CarouselText
} from "./CarouselStyle";

interface Props {}

const Carousel: React.FC<Props> = () => {
  const images = [
    { img: img1, info: "Blushes" },
    { img: img2, info: "Foundations" },
    { img: img3, info: "Lip Liners" },
    { img: img4, info: "Bronzers" },
    { img: img5, info: "Mascaras & All other stuff." }
  ];
  return (
    <CarouselContainer>
      {images.map((item, key) => (
        <CarouselItem key={key}>
          <CarouselImg src={item.img} />
          <CarouselText>{item.info}</CarouselText>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
