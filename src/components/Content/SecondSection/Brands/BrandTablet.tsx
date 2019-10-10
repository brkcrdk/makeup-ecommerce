import React from "react";
import styled from "styled-components";
import device from "../../../device";
import brandImages from "./brandImages";
interface Props {}
const Slide = styled.div`
  display: flex;
  @media ${device.mobileTablet} {
    margin-left: -3em;
  }
`;
const MobileTablet = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    margin-top: -1em;
    @media ${device.mobileTablet} {
      width: 15em;
    }
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: flex;
  }
  @media ${device.tabletLaptop} {
    display: none;
  }
`;
const BrandTablet: React.FC<Props> = () => {
  const images = brandImages(3);
  return (
    <MobileTablet>
      {images.map((arr, key) => (
        <Slide key={key}>
          {arr.map((image, key) => (
            <img src={image} key={key} alt={`brand-${key}`} />
          ))}
        </Slide>
      ))}
    </MobileTablet>
  );
};

export default BrandTablet;
