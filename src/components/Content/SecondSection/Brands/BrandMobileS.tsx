import React from "react";
import brandImages from "./brandImages";
import styled from "styled-components";
import device from "../../../device";

export const Slide = styled.div``;
const MobileS = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    width: 100%;
    @media ${device.mobileS} {
      height: 3em;
    }
    @media ${device.mobileM} {
      margin-left: 1em;

      height: 3em;
    }
    @media ${device.mobileL} {
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

const Brands: React.FC = () => {
  const mobileSContent = brandImages();
  return (
    <MobileS>
      {/* {mobileSContent.map((arr, key) => (
        <Slide key={key}>
          {arr.map((image, key) => (
            <img key={key} src={image} alt={`brand-${key}`} />
          ))}
        </Slide>
      ))} */}
    </MobileS>
  );
};

export default Brands;
