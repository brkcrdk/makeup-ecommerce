import styled from "styled-components";
import colours from "../../../colours";

interface searchProps {
  searchToggle: boolean;
}
export const InputContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 2em;
  align-items: center;
  top: 4em;
  display: block;
  transform: ${(p: searchProps) =>
    p.searchToggle ? "translateX(10%)" : "translateX(-120%)"};
  transition: transform 0.5s ease-in-out;
`;
//SEARCH INPUT
export const Input = styled.input`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-inline-start: 1em;
  background-color: ${colours.background};
  color: ${colours.primaryText};
  font-size: 1em;
  font-style: italic;
  border: 1px double lightgray;
  border-radius: 0.5em;
  outline: none;
`;
