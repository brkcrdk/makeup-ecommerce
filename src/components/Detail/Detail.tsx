import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Parallax,
  ImgContainer,
  DetailContainer,
  DetailSpan,
  DetailP
} from "./DetailStyle";
import { getProduct } from "../getTypes";
import Footer from "../Content/Footer/Footer";
import Colours from "./Colours";
import { useSelector } from "react-redux";
import { IProducts } from "../../store/fetchProducts/types";
interface Props {
  match: {
    params: {
      id: string;
    };
  };
  location: { pathname: string };
  storeProduct: {
    product: [];
  };
}

const Detail: React.FC<Props> = ({ match, location }) => {
  const products = useSelector((state: Props) => state.storeProduct.product);
  const [product, setProduct] = useState<IProducts[]>([]);
  const id = parseFloat(location.pathname.split("/")[2]);
  useEffect(() => {
    setProduct(getProduct(products, id));
  }, [products, id]);
  if (product.length === 0)
    return (
      <Container>
        <Parallax />
        <p>Loading..</p>
      </Container>
    );
  return (
    <Container>
      <Parallax>
        <h3>{product[0].name}</h3>
      </Parallax>
      <Content>
        <ImgContainer>
          <img src={product[0].api_featured_image} alt={`${product[0].name}`} />
        </ImgContainer>
        <DetailContainer>
          <DetailP>
            <DetailSpan>Name:{product[0].name}</DetailSpan>
          </DetailP>

          <p>Brand: {product[0].brand}</p>
          <p>Type: {product[0].product_type}</p>
          <p>Description: {product[0].description}</p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            Colours:
            {product[0].product_colors.map((color) => (
              <Colours />
            ))}
          </div>
          <span>Tags:</span>
          <ul>
            {product[0].tag_list.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </DetailContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Detail;
