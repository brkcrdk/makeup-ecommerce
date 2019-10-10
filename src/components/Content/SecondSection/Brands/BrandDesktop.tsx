import React from "react";
import styled from "styled-components";
import device from "../../../device";
import brandImages from "./brandImages";
interface Props {}
const Slide = styled.div`
  flex: 0 0 0;
`;
const Desktop = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    @media ${device.tabletLaptop} {
      width: 8em;
      height: 5em;
    }
    @media ${device.laptop} {
      width: 9em;
      height: 5em;
    }
    @media ${device.laptopL} {
      margin: 0 1em;
      width: 10em;
      height: 5em;
    }
    @media ${device.desktop} {
      margin: 0 1em;
      width: 13em;
      height: 5em;
    }
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tabletLaptop} {
    display: flex;
  }
`;
const BrandDesktop: React.FC<Props> = () => {
  const images = brandImages();
  return (
    <Desktop>
      {images.map((arr, key) => (
        <Slide key={key}>
          {arr.map((image, key) => (
            <img key={key} src={image} alt={`brand-${key}`} />
          ))}
        </Slide>
      ))}
    </Desktop>
  );
};

export default BrandDesktop;
