import React from "react";
import {
  Container,
  Content,
  Parallax,
  ImgContainer,
  DetailContainer
} from "./DetailStyle";
import Footer from "../Content/Footer/Footer";
interface Props {
  match: {};
}

const Detail: React.FC<Props> = ({ match }) => {
  console.log(match);
  return (
    <Container>
      <Parallax />
      <Content>
        <ImgContainer>İmg</ImgContainer>
        <DetailContainer>Details & stuff</DetailContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Detail;
