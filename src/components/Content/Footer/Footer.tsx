import React from "react";
import { Container, FootSection } from "./FooterStyle";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <div>Links</div>
        <div>Brand</div>
        <div>Social</div>
      </FootSection>
      All Rights Reserved
    </Container>
  );
};

export default Footer;
