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
      <hr
        style={{
          width: "80%",
          color: "lightgray",
          marginBottom: "2em",
          border: "0.5px solid"
        }}
      />
    </Container>
  );
};

export default SecondSection;
