import styled from "styled-components";
import device from "../../device";
export const Container = styled.div`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  justify-content: center;
  @media ${device.mobileM} {
    width: 1.7em;
    height: 1.7em;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const Button = styled.a``;
