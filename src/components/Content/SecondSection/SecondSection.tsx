import React from "react";
import {
  Container,
  BrandSection,
  WantedSection,
  Parallax
} from "./SecondStyle";
import img from "./p3.jpg";

import Tips from "./Tips/Tips";
import Brands from "./Brands/Brands";
import Wanted from "./MostWanted/Wanted";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <Container>
      <BrandSection>
        <Brands />
      </BrandSection>
      <WantedSection>
        <Wanted />
      </WantedSection>
      <Parallax style={{ backgroundImage: `url(${img})` }} />
      <Tips />
    </Container>
  );
};

export default SecondSection;
