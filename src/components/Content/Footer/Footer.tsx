import React from "react";
import { Container, FootSection } from "./FooterStyle";
import Links from "./Links";
import Brand from "../../Nav/Brand/Brand";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <Links />
        <Brand />
        <div>Social</div>
      </FootSection>
      All Rights Reserved
    </Container>
  );
};

export default Footer;
