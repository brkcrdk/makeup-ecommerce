import React from "react";
import { Container, FootSection } from "./FooterStyle";
import Links from "./Links";
import Brand from "../../Nav/Brand/Brand";
import Social from "./Social";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <Links />
        <Brand />
        <Social />
      </FootSection>
      All Rights Reserved
    </Container>
  );
};

export default Footer;
