import styled from "styled-components";
import colours from "../../../colours";

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 2.5em;
  align-items: center;
  top: 4em;
  padding: 0.5em 0;
  display: block;
  overflow-x: hidden;
  transition: transform 0.5s ease-in-out;
`;
//SEARCH INPUT
interface inputProps {
  searchToggle: boolean;
}
export const Input = styled.input`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding-inline-start: 1em;
  transform: ${(p: inputProps) =>
    p.searchToggle ? "translateX(80%)" : "translateX(200%)"};
  transition: transform 0.5s ease-in-out;
  background-color: ${colours.background};
  color: ${colours.primaryText};
  font-size: 1em;
  font-style: italic;
  border-radius: 0.5em;
  border: 1px solid lightgray;
  outline: none;
`;
