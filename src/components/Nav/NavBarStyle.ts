import styled from "styled-components";
interface Props {
  toggle: boolean;
}

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
  display: ${(p: Props) => (p.toggle ? "grid" : "none")};
  align-items: center;
  top: 3.5em;
  transition: transform 1s;
  animation: fade-in 1s;
  animation-iteration-count: 1;
  @keyframes fade-in {
    from {
      transform: scale(0, 0);
    }
    to {
      translate: scale(1, 1);
    }
  }
`;
export const Input = styled.input`
  width: 90%;
  margin: 0 auto;
  padding-inline-start: 1em;
  height: 100%;
  background-color: #eae8ed;
  border: 1px double lightgray;
`;
