import React from "react";
import { Container, FootSection } from "./FooterStyle";
import Links from "./Links";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <Links />

        <div>Brand</div>
        <div>Social</div>
      </FootSection>
      All Rights Reserved
    </Container>
  );
};

export default Footer;
