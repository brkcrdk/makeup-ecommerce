import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

const handleContent = (slideCount?: number) => {
  slideCount === undefined ? (slideCount = 6) : (slideCount = slideCount);
  const images = [img1, img2, img3, img4, img5, img6];
  //Split the array to given number of arrays
  const arrayLength = Math.max(images.length / slideCount, 1);
  const newArray = [];
  for (let i = 0; i < slideCount; i++) {
    if (arrayLength * (i + 1) <= images.length) {
      newArray.push(images.slice(arrayLength * i, arrayLength * (i + 1)));
    }
  }
  return newArray;
};

export default handleContent;
