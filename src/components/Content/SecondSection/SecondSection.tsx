import React from "react";
import Brand from "./Brands/Brands";
import Carousel from "../Carousel/Carousel";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <Carousel content={<Brand />} />
    </div>
  );
};

export default SecondSection;
