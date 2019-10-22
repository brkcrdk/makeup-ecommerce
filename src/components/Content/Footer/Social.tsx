import React from "react";
import styled from "styled-components";
interface Props {}
const Container = styled.div``;
const Social: React.FC<Props> = () => {
  return (
    <Container>
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="fab fa-facebook-f" />
    </Container>
  );
};

export default Social;
