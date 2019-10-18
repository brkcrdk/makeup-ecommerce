import styled from "styled-components";
import colours from "../../colours";
import fonts from "../../fonts";
export const Container = styled.div`
  margin: 2em;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: ${colours.boxShadow};
  font-family: ${fonts.raleway};
  transition: 0.3s;
  &:hover {
    transform: translateY(-1%);
  }
`;

export const Img = styled.img`
  height: 14em;
  width: 100%;
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
  background-color: ${colours.background};
  filter: brightness(90%);
  padding: 0.5em;
  border: none;
  outline: none;
  font-family: ${fonts.montserrat};
  font-weight: 700;
`;
