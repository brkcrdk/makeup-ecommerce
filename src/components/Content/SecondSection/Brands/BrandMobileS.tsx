import React from "react";
import brandImages from "./brandImages";
import styled from "styled-components";
import device from "../../../device";
import img1 from "./images/2.jpg";
import img2 from "./images/3.jpg";
import img3 from "./images/1.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
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
  const images = [img1, img2, img3, img4, img5, img6];
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
