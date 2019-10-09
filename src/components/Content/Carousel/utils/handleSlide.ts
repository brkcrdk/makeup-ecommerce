const handleSlide = (
  direction: string,
  newItems: {}[][],
  index: number,
  setIndex: (arg: number) => void
) => {
  if (direction === "right") {
    if (newItems.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  } else if (direction === "left") {
    if (index === 0) {
      setIndex(newItems.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
};

export default handleSlide;
