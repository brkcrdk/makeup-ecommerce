import React, { useState } from "react";
// import MobileSBrand from "./BrandMobileS";
// import TabletBrand from "./BrandTablet";
import DekstopBrand from "./BrandDesktop";
interface Props {}

const Brands: React.FC<Props> = () => {
  return (
    <>
      <DekstopBrand />
    </>
  );
};

export default Brands;
