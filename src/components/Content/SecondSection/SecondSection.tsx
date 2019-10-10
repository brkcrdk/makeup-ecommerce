import React from "react";
import MobileSBrand from "./Brands/Brands";
import Carousel from "../Carousel/Carousel";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return <Carousel content={<MobileSBrand />} loop={false} />;
};

export default SecondSection;
