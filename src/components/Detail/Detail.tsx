import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Parallax,
  ImgContainer,
  DetailContainer,
  DetailHead,
  DetailText,
  Splitter
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
  storeProducts: {
    products: [];
  };
}

const Detail: React.FC<Props> = ({ match }) => {
  const products = useSelector((state: Props) => state.storeProducts.products);
  const [product, setProduct] = useState<IProducts[]>([]);
  useEffect(() => {
    const id = parseFloat(match.params.id);
    setProduct(getProduct(products, id));
  }, [match.params.id, products]);

  if (product.length === 0)
    return (
      <Container>
        <Parallax />
        <p>Loading..</p>
      </Container>
    );

  const renderColours = () => {
    <>
      <DetailHead>Colours</DetailHead>
      <Splitter />
      {product[0].product_colors.map((colour, index) => (
        <Colours key={index} hex={colour.hex_value} name={colour.colour_name} />
      ))}
    </>;
  };

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
          <DetailHead>Name</DetailHead>
          <Splitter />
          <DetailText>{product[0].name}</DetailText>
          <DetailHead>Brand</DetailHead>
          <Splitter />
          <DetailText>{product[0].brand}</DetailText>
          <DetailHead>Type</DetailHead>
          <Splitter />
          <DetailText>{product[0].product_type}</DetailText>
          <DetailHead>Description</DetailHead>
          <Splitter />
          <DetailText>{product[0].description.replace(":", ": ")}</DetailText>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            Colours:
            {product[0].product_colors.map((colour, index) => (
              <Colours
                key={index}
                hex={colour.hex_value}
                name={colour.colour_name}
              />
            ))}
          </div>
          <ul>
            {product[0].tag_list.length >= 0
              ? product[0].tag_list.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))
              : ""}
          </ul>
        </DetailContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Detail;
