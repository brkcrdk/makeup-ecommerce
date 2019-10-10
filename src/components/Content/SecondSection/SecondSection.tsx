import React from "react";
import Brand from "./Brands/Brands";
import Carousel from "../Carousel/Carousel";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <div>
      <Carousel content={<Brand />} loop={true} />
    </div>
  );
};

export default SecondSection;
