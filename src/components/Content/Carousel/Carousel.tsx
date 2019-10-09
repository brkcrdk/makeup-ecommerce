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
  const [index, setIndex] = useState(1);

  //Inside of carousel component new function will going to be added
  //This new function will going to get size
  //Maybe with this information carousel automated responsive functionality
  //Maybe it wont be necessary to have it
  //Because it could be done with css

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
  //Explenation=> First create new array with given array
  //And split that array with given option which is number
  //Maybe it should be optinal and deault option added in to function

  const newItems = handleArray(items, 4);
  //Container is flex this gives slider effect
  //Content is grid this will gives responsive effect
  //New arrays each nested array will be inside Content element
  //In that grid will be given elements will be created.
  return (
    <CarouselContainer>
      {newItems.map((array, key) => (
        <CarouselContent key={key} index={index} show={key}>
          {array.map((item: any, key) => {
            return React.createElement(
              `${item.object.type}`,
              //Dont need to write key: key
              //Because map function index parameter and elements
              //name is same which something like this => key:key
              //If it was something different then
              //It was going to be necessary to write it.
              { key },
              `number is:${item.object.props.children}`
            );
          })}
        </CarouselContent>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
