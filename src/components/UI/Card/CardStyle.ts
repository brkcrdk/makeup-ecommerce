import styled from "styled-components";
import colours from "../../colours";
import fonts from "../../fonts";
import device from "../../device";
export const Container = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-family: ${fonts.raleway};
  transition: 0.3s;
  margin: 0 auto;
  &:hover {
    box-shadow: ${colours.boxShadow};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 10em;
`;
export const CardContent = styled.div`
  padding: 0.5em;
  margin-top: -1.5em;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Title = styled.h4``;
export const Name = styled.p``;
export const Price = styled.span`
  font-style: italic;
`;
export const Add = styled.button`
  background-color: transparent;
  color: ${colours.primaryText};
  filter: brightness(90%);
  padding: 0.5em;
  border: none;
  outline: none;
  font-family: ${fonts.montserrat};
  font-weight: 700;
  &:hover {
    color: ${colours.pink};
    background-color: ${colours.background};
  }
`;
