import styled from "styled-components";
import fonts from "../../../fonts";
import colours from "../../../colours";

//If hover effect dont work look for searchbox input width.

export const DropContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.8em;
  &:hover > div {
    display: block;
  }
`;
export const DropButton = styled.button`
  background: transparent;
  border: none;
  color: ${colours.primaryText};
  font-family: ${fonts.montserrat};
  font-size: 1.1em;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${colours.pink};
    transition: width 0.5s ease;
    -webkit-transition: width 0.5s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: ${colours.pink};
  }
`;

export const DropContent = styled.div`
  position: absolute;
  display: none;
  min-width: 160px;
  z-index: 1;
  &:hover {
    border: 1px solid grey;
    box-shadow: 1em 1em 1em rgba(black, 0.1);
  }
`;
export const DropItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: grid;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 1em 1em 1em rgba(grey, 0.1);
  }
`;
