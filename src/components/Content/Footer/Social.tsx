import React from "react";
import styled from "styled-components";
import colours from "../../colours";
interface Props {}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0 1em 0;
`;
const SocialLinks = styled.a`
  text-decoration: none;
  color: ${colours.pink};
  margin: 0 1em;
  cursor: pointer;
  i {
    font-size: 1.1em;
  }
`;
const Social: React.FC<Props> = () => {
  return (
    <Container>
      <SocialLinks href="#?">
        <i className="fab fa-instagram" />
      </SocialLinks>
      <SocialLinks href="#?">
        <i className="fab fa-twitter" />
      </SocialLinks>
      <SocialLinks href="#?">
        <i className="fab fa-facebook-f" />
      </SocialLinks>
      <SocialLinks href="#?">
        <i className="fab fa-pinterest" />
      </SocialLinks>
    </Container>
  );
};

export default Social;
