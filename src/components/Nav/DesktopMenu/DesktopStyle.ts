import styled from "styled-components";
export const MenuContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
export const MenuItem = styled.div`
  &:hover > div {
    display: block;
  }
`;

export const MenuDropDown = styled.div`
  display: none;
  position: absolute;
`;
export const DropContent = styled.div`
  display: grid;
`;
