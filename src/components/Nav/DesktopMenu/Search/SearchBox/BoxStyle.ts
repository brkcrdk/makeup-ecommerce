import styled from "styled-components";
import colours from "../../../../colours";

// WARNING: Input container width might block dropdown functionality
export const InputContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 2.5em;
  align-items: center;
  top: 4em;
  right: 0;
  padding: 0.5em 0;
  display: flex;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
`;
//SEARCH INPUT
interface inputProps {
  searchToggle: boolean;
}
export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-inline-start: 1em;
  transform: ${(p: inputProps) =>
    p.searchToggle ? "translateX(0%)" : "translateX(150%)"};
  transition: transform 0.5s ease-in-out;
  background-color: ${colours.background};
  color: ${colours.primaryText};
  font-size: 1em;
  font-style: italic;
  border-radius: 0.5em;
  border: 1px solid lightgray;
  outline: none;
`;
