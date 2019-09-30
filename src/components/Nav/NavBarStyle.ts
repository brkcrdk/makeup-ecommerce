import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
`;
export const RightSide = styled.div`
  display: flex;
  border: 1px solid green;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  position: absolute;
  font-size: 1.2em;
  top: 2.8em;
  width: 95%;
  padding: 0.5em 0 0 0.5em;
  margin: 0 auto;
  height: 2em;
  border: 1px double;
  border-radius: 0.5em;
  display: flex;
`;
