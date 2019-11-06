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
import { IProducts } from "../../store/fetchProducts/types";
interface Props {
  match: {
    params: {
      id: string;
    };
  };
  storeProduct: {
    product: [];
  };
}

const Detail: React.FC<Props> = ({ match }) => {
  const products = useSelector((state: Props) => state.storeProduct.product);
  const [product, setProduct] = useState<IProducts[]>([]);
  const id = parseFloat(match.params.id);
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
  console.log(product);
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
          <p>Name: {product[0].name}</p>
          <p>Brand: {product[0].brand}</p>
          <p>Type: {product[0].product_type}</p>
          <p>Description: {product[0].description}</p>
          <div>
            Colours:{" "}
            {product[0].product_colors.map((color) => {
              return (
                <div>
                  <div
                    style={{
                      backgroundColor: `${color.hex_value}`,
                      borderRadius: "50%",
                      width: "5em",
                      height: "5em"
                    }}
                  />
                  <span>{color.colour_name}</span>
                </div>
              );
            })}
          </div>
          Tags:{" "}
          {product[0].tag_list.map((tag) => (
            <li>{tag}</li>
          ))}
        </DetailContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Detail;
