import React from "react";
import { Container, Brands } from "./SecondStyle";
import MobileSBrand from "./Brands/BrandMobileS";
import TabletBrand from "./Brands/BrandTablet";
import Carousel from "../Carousel/Carousel";
import DekstopBrand from "./Brands/BrandDesktop";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <Container>
      <Brands>
        <Carousel content={<MobileSBrand />} />
        <Carousel content={<TabletBrand />} />
        <DekstopBrand />
      </Brands>
    </Container>
  );
};

export default SecondSection;
