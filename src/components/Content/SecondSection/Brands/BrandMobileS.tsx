import React from "react";
import brandImages from "./brandImages";
import styled from "styled-components";
import device from "../../../device";

export const Slide = styled.div`
  flex: 0 0 0 0;
`;
const MobileS = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    margin-top: -1.4em;
    @media ${device.mobileS} {
      width: 14em;
      height: 7em;
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
      {mobileSContent.map((arr, key) => (
        <Slide key={key}>
          {arr.map((image, key) => (
            <img key={key} src={image} alt={`brand-${key}`} />
          ))}
        </Slide>
      ))}
    </MobileS>
  );
};

export default Brands;
