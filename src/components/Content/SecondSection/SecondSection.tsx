import React from "react";
import { Container, BrandSection, WantedSection } from "./SecondStyle";

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
    </Container>
  );
};

export default SecondSection;
