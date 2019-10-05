import styled from "styled-components";
import colours from "../../colours";
interface Toggle {
  toggle: boolean;
}
export const Container = styled.div`
  height: 100vh;
  width: ${(p: Toggle) => (p.toggle ? "50%" : "0")};
  position: fixed;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  text-transform: capitalize;
  background-color: ${colours.background};
  span {
    padding: 1em 1em 0 0;
    font-size: 1.2em;
    font-weight: 900;
    display: flex;
    justify-content: flex-end;
  }
`;
