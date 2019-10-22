import React from "react";
import { Container, FootSection, BrandContainer } from "./FooterStyle";
import Links from "./Links";
import Brand from "../../Nav/Brand/Brand";
import Social from "./Social";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <Links />
        <BrandContainer>
          <Brand />
        </BrandContainer>
        <Social />
      </FootSection>
      <p>
        &#xa9; 2019 <span>Bellezza Cosmetics</span> All Rights Reserved
      </p>
    </Container>
  );
};

export default Footer;
