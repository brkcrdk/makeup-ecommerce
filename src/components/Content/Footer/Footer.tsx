import React from "react";
import { Container } from "./FooterStyle";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <div>Links</div>
      <div>Brand</div>
      <div>Social</div>
    </Container>
  );
};

export default Footer;
