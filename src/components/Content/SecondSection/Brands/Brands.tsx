import React from "react";
import MobileSBrand from "./BrandMobileS";
import TabletBrand from "./BrandTablet";
import Carousel from "../../../UI/Carousel/Carousel";
import DekstopBrand from "./BrandDesktop";
interface Props {}

const Brands: React.FC<Props> = () => {
  return (
    <>
      <Carousel content={<MobileSBrand />} />
      <Carousel content={<TabletBrand />} />
      <DekstopBrand />
    </>
  );
};

export default Brands;
