import styled from "styled-components";
import fonts from "../../../fonts";
import colours from "../../../colours";

//If hover effect dont work look for searchbox input width.

export const DropContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${fonts.montserrat};
  margin: 0.8em;
  /* When hover content menu styles */
  &:hover > div {
    padding-top: 0.5em;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
    height: 15em;
    width: 20em;
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
    width: 1px;
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
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${colours.primaryText};
  }
`;
