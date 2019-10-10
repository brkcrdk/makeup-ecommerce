import React from "react";
import styled from "styled-components";
import device from "../../../device";
import brandImages from "./brandImages";
interface Props {}
export const Slide = styled.div`
  flex: 0 0 0;
`;
const MobileTablet = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    margin-top: -1em;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileM} {
    display: flex;
  }
`;
const BrandTablet: React.FC<Props> = () => {
  return <MobileTablet>MobileTablet goes here..</MobileTablet>;
};

export default BrandTablet;
