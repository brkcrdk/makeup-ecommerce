import React, { useState } from "react";
// import MobileSBrand from "./BrandMobileS";
// import TabletBrand from "./BrandTablet";
import DekstopBrand from "./BrandDesktop";
interface Props {}

const Brands: React.FC<Props> = () => {
  const [active, setActive] = useState(1);

  const handleIndicator = (n: number) => {
    if (n !== active) {
      return setActive(n);
    }
  };
  return (
    <>
      <DekstopBrand />
    </>
  );
};

export default Brands;
