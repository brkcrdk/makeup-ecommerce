import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface searchProps {
  searchToggle: boolean;
}
export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 2em;
  align-items: center;
  top: 3.5em;
  display: grid;
  transform: ${(p: searchProps) =>
    p.searchToggle ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.5s ease-in-out;
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-inline-start: 1em;
  background-color: #ffe8ef;
  border: 1px double lightgray;
`;

interface sideProps {
  sidebarToggle: boolean;
}
export const HamburgerContainer = styled.div`
  align-items: center;
  justify-content: center;
  display:${(p: sideProps) => (p.sidebarToggle ? "none" : "grid")}
  div {
    width: 2em;
    border: 1px solid black;
    margin: 0.5em;
  }
`;
