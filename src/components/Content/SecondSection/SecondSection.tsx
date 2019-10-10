import React from "react";
import { Brands } from "./SecondStyle";
import Brand from "./Brands/Brands";
import Carousel from "../Carousel/Carousel";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <Brands>
      <Carousel content={<Brand />} loop={false} />
    </Brands>
  );
};

export default SecondSection;
