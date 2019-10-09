import React, { useState } from "react";
import handleSlide from "./utils/handleSlide";
import { CarouselContainer, CarouselContent } from "./CarouselStyle";
const items = [
  {
    object: (
      <div>
        <p>burak</p>
      </div>
    )
  },
  {
    object: (
      <div>
        <li>
          <a href="#?">Burak1</a>
        </li>
      </div>
    )
  },
  {
    object: (
      <div>
        <li>
          <a href="#?">Burak2</a>
        </li>
      </div>
    )
  },
  {
    object: (
      <div>
        <li>
          <a href="#?">Burak3</a>
        </li>
      </div>
    )
  }
];

const Carousel: React.FC = () => {
  // const [wSize, setWSize] = useState(0);
  //-----
  //Inside of carousel component new function will going to be added
  //This new function will going to get size
  //Maybe with this information carousel automated responsive functionality
  //Maybe it wont be necessary to have it
  //Because it could be done with css
  //----
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

  const newItems = handleArray(items, 2);
  //Container is flex this gives slider effect
  //Content is grid this will gives responsive effect
  //New arrays each nested array will be inside Content element
  //In that grid will be given elements will be created.
  //-----
  //Draggable Slider Function
  const [initialX, setInitialX] = useState(0);
  const [diff, setDiff] = useState(0);
  const [direction, setDirection] = useState("not moved");

  //Mouse actions
  const mouseStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setInitialX(e.pageX);
  };
  const mouseEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDiff(e.pageX);
    handleDiff();
    handleSlide(direction, newItems, index, setIndex);
  };
  //Touch actions
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setInitialX(e.touches[0].pageX);
  };
  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setDiff(e.touches[0].pageX);
    handleDiff();
    handleSlide(direction, newItems, index, setIndex);
  };

  const handleDiff = () => {
    if (initialX - diff === 0) {
      setDirection("not moved");
    } else if (initialX - diff <= -1) {
      setDirection("right");
    } else if (initialX - diff >= 1) {
      setDirection("left");
    }
  };
  //------
  //Next and Prev actions
  const [index, setIndex] = useState(0);
  // const handleSlide = () => {
  //   if (direction === "right") {
  //     if (newItems.length - 1 === index) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   } else {
  //     if (index === 0) {
  //       setIndex(newItems.length - 1);
  //     } else {
  //       setIndex(index - 1);
  //     }
  //   }
  // };

  //----
  //For possible nested carousel objects
  const renderer = (obj: any, key: number): any => {
    if (obj.props.children.hasOwnProperty("type")) {
      return renderer(obj.props.children, key);
    } else if (obj.props.children.hasOwnProperty("")) {
      return console.log("empty");
    } else {
      return React.createElement(
        `${obj.type}`,
        { key },
        `${obj.props.children}`
      );
    }
  };
  return (
    <CarouselContainer>
      {newItems.map((array, key) => (
        <CarouselContent
          key={key}
          index={index}
          show={key}
          onMouseDown={mouseStart}
          onMouseUp={mouseEnd}
          onTouchStart={touchStart}
          onTouchMove={touchEnd}>
          {array.map((item: any, key) => {
            return React.createElement(
              `${item.object.type}`,
              { key },
              renderer(item.object, key)
            );
          })}
        </CarouselContent>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
