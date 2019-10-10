import React from "react";
import MobileSBrand from "./Brands/BrandMobileS";
import TabletBrand from "./Brands/BrandTablet";
import Carousel from "../Carousel/Carousel";
import DekstopBrand from "./Brands/BrandDesktop";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <>
      <Carousel content={<MobileSBrand />} />
      <Carousel content={<TabletBrand />} />
      <Carousel content={<DekstopBrand />} />
    </>
  );
};

export default SecondSection;
