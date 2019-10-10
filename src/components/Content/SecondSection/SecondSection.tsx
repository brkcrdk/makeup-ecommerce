import React from "react";
import { Container, BrandSection, WantedSection } from "./SecondStyle";
import MobileSBrand from "./Brands/BrandMobileS";
import TabletBrand from "./Brands/BrandTablet";
import Carousel from "../Carousel/Carousel";
import DekstopBrand from "./Brands/BrandDesktop";
import Wanted from "./MostWanted/Wanted";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <Container>
      <BrandSection>
        <Carousel content={<MobileSBrand />} />
        <Carousel content={<TabletBrand />} />
        <DekstopBrand />
      </BrandSection>
      <WantedSection>
        <Wanted />
      </WantedSection>
    </Container>
  );
};

export default SecondSection;
