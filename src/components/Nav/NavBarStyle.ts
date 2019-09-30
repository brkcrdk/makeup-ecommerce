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
export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  align-items: center;
  top: 3.5em;
`;
export const Input = styled.input`
  width: 90%;
  margin: 0 auto;
  padding-inline-start: 1em;
  height: 100%;
  background-color: #eae8ed;
  border: 1px double lightgray;
`;
