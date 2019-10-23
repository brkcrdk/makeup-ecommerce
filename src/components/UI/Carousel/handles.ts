import { ReactSVG } from "react";

export const handleNext = (
  count: number,
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>
) => {
  if (active === count - 1) {
    setActive(0);
  } else {
    setActive(active + 1);
  }
};

export const handlePrev = (
  count: number,
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>
) => {
  if (active === 0) {
    setActive(count - 1);
  } else {
    setActive(active - 1);
  }
};

export const handleIndicator = (
  index: number,
  active: number,
  setDirection: React.Dispatch<React.SetStateAction<string>>,
  setActive: React.Dispatch<React.SetStateAction<number>>
) => {
  if (index !== active) {
    if (active < index) {
      setDirection("next");
    } else {
      setDirection("prev");
    }
    return setActive(index);
  }
};

export const mouseStart = (
  e: React.MouseEvent,
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>,
  sliderRef: React.RefObject<HTMLDivElement>,
  setStart: React.Dispatch<React.SetStateAction<number>>
) => {
  setIsDown(true);
  if (sliderRef && sliderRef.current) {
    setStart(e.pageX - sliderRef.current.offsetLeft);
  }
};
