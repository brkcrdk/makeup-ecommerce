import React from "react";
import { imgArray } from "./brandImages";
import styled from "styled-components";
import device from "../../../device";
import Carousel from "../../../UI/Carousel/Carousel";
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -6em;
  img {
    width: 100%;
    @media ${device.mobileS} {
    }
    @media ${device.mobileM} {
    }
    @media ${device.mobileL} {
    }
  }
`;

const Brands: React.FC = () => {
  return (
    <Carousel>
      {imgArray.map((image, key) => (
        <ImageContainer>
          <img src={image} key={key} />
        </ImageContainer>
      ))}
    </Carousel>
  );
};

export default Brands;
