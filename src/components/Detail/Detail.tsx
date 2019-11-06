import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Parallax,
  ImgContainer,
  DetailContainer
} from "./DetailStyle";
import { getProduct } from "../getTypes";
import Footer from "../Content/Footer/Footer";
import { useSelector } from "react-redux";
interface Props {
  match: {
    params: {
      id: number;
    };
  };
  storeProduct: {
    product: [];
  };
}

const Detail: React.FC<Props> = ({ match }) => {
  const products = useSelector((state: Props) => state.storeProduct.product);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const id = match.params.id;
    setProduct(getProduct(products, id));
  }, [match.params.id, products]);
  console.log(product);
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
