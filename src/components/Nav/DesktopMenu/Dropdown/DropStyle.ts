import styled from "styled-components";
import fonts from "../../../fonts";
import colours from "../../../colours";
import device from "../../../device";
//If hover effect dont work look for searchbox input width.

export const DropContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${fonts.montserrat};
  margin: 0.8em;
  @media ${device.tabletLaptop} {
    margin-top: 1em;
  }
  @media ${device.laptop} {
    margin-top: 1.5em;
  }
  @media ${device.desktop} {
    margin-top: 2.7em;
  }
  /* When hover content menu styles */
  &:hover > div {
    padding-top: 0.5em;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
    height: 15em;
    width: 20em;
    @media ${device.desktop} {
      height: 20em;
      width: 30em;
    }
  }
`;
export const DropButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${colours.primaryText};
  font-family: ${fonts.montserrat};
  font-size: 1.1em;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  @media ${device.tabletLaptop} {
    font-size: 0.9em;
  }
  @media ${device.laptop} {
    font-size: 1em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
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
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: lightgray;
  }
`;
export const DropItem = styled.a`
  color: ${colours.pink};
  padding: 0.5em;
  text-decoration: none;
  display: grid;
  text-transform: capitalize;
  cursor: pointer;
  @media ${device.tabletLaptop} {
    font-size: 1em;
  }
  @media ${device.desktop} {
    font-size: 1.5em;
  }
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${colours.primaryText};
    font-weight: 700;
  }
`;
