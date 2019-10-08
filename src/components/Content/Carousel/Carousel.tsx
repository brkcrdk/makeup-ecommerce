import React, { useState, useEffect } from "react";

import { CarouselContainer, CarouselContent } from "./CarouselStyle";
import { cloneNode } from "@babel/types";
const items = [
  { name: "Burak1", adres: "Muğla1" },
  { name: "Burak2", adres: "Muğla2" },
  { name: "Burak3", adres: "Muğla3" },
  { name: "Burak4", adres: "Muğla4" },
  { name: "Burak5", adres: "Muğla5" },
  { name: "Burak6", adres: "Muğla6" }
];
interface ICarousel {
  items: {
    name: string;
    adres: string;
  };
}
const Carousel: React.FC = () => {
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
  const handleArray = (arr: {}[], n: number) => {
    const arrayLength = Math.max(arr.length / n, 1);
    const newArray = [];
    for (let i = 0; i < n; i++) {
      if (arrayLength * (i + 1) <= arr.length) {
        newArray.push(arr.slice(arrayLength * i, arrayLength * (i + 1)));
      }
    }
    return newArray;
  };
  const newItems = handleArray(items, 3);
  return (
    <CarouselContainer>
      {newItems.map((array, key) => (
        <CarouselContent key={key}>
          {array.map((item: ICarousel | any, key) => {
            return <li key={key}>{item.name}</li>;
          })}
        </CarouselContent>
      ))}
      {/* {items.map((array, key) => (
        <CarouselContent>
          {array.map((item, key) => {
            if (!item.name) {
              return <li>{item.adres}</li>;
            } else if (!item.adres) {
              return <li>{item.name}</li>;
            }
          })}
        </CarouselContent>
      ))} */}
    </CarouselContainer>
  );
};

export default Carousel;
