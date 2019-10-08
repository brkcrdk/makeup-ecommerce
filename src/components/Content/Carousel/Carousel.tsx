import React, { useState, useEffect } from "react";

import { CarouselContainer, CarouselContent } from "./CarouselStyle";
const items = [
  [{ name: "Burak1" }, { adres: "Muğla1" }],
  [{ name: "Burak2" }, { adres: "Muğla2" }],
  [{ name: "Burak3" }, { adres: "Muğla3" }],
  [{ name: "Burak4" }, { adres: "Muğla4" }],
  [{ name: "Burak5" }, { adres: "Muğla5" }]
];
interface Props {}

const Carousel: React.FC<Props> = () => {
  // const [wSize, setWSize] = useState(0);
  const grid = 2;
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth !== wSize) {
  //       return setWSize(window.innerWidth);
  //     } else {
  //       return wSize;
  //     }
  //   });
  // }, []);
  // if (wSize === 320) {
  //   console.log("mobileS");
  // } else if (wSize > 320 && wSize <= 375) {
  //   console.log("mobileM");
  // } else if (wSize > 375 && wSize <= 425) {
  //   console.log("MobileL");
  // }

  return (
    <CarouselContainer>
      {items.map((array, key) => (
        <CarouselContent>
          {array.map((item, key) => {
            if (!item.name) {
              return <li>{item.adres}</li>;
            } else if (!item.adres) {
              return <li>{item.name}</li>;
            }
          })}
        </CarouselContent>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
