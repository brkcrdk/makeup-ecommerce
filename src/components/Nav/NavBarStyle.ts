import styled from "styled-components";

interface IProps {
  searchToggle: boolean;
}

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

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 2em;
  align-items: center;
  top: 3.5em;
  display: grid;
  transform: ${(p: IProps) =>
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

export const HamburgerContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 1em 0 0 1em;
`;
