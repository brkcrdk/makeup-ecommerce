import styled from "styled-components";
import { colours, fonts } from "../utils";
export const Container = styled.div`
  /* padding-top: 5.5em; */
  background-color: white;
`;

export const Parallax = styled.div`
  background-color: white;
  /* background-attachment: fixed; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colours.pink};
    font-family: ${fonts.raleway};
    font-style: italic;
    font-size: 2em;
    position: absolute;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  /* background-color: ${colours.background}; */
  border-radius: 2px;
  box-shadow: ${colours.boxShadow};
  margin-top: -2em;
  margin-left: 0.7em;
  margin-right: 0.7em;
  padding: 1em;
`;
