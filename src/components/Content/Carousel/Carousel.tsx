import React, { useState, useEffect } from "react";

import { CarouselContainer, CarouselContent } from "./CarouselStyle";
const items = [
  { object: <li>1</li> },
  { object: <li>2</li> },
  { object: <li>3</li> },
  { object: <li>4</li> }
];

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
    //Split the array to given number of arrays
    const arrayLength = Math.max(arr.length / n, 1);
    const newArray = [];
    for (let i = 0; i < n; i++) {
      if (arrayLength * (i + 1) <= arr.length) {
        newArray.push(arr.slice(arrayLength * i, arrayLength * (i + 1)));
      }
    }
    return newArray;
  };
  const newItems = handleArray(items, 2);
  console.log(newItems);
  return (
    <CarouselContainer>
      {newItems.map((array, key) => (
        <CarouselContent key={key}>
          {array.map((item: any, key) => {
            return React.createElement(
              `${item.object.type}`,
              { key },
              `number is:${item.object.props.children}`
            );
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
