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
  return <Desktop>Desktop goes here..</Desktop>;
};

export default BrandDesktop;
