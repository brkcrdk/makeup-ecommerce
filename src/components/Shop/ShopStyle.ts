import styled from "styled-components";
import background from "./p11.jpg";
import { colours } from "../utils";
export const Container = styled.div``;

export const Parallax = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: ${colours.boxShadow};
  display: grid;
  grid-template-columns: 4fr 8fr;
  margin-top: -2em;
  margin-left: 0.7em;
  margin-right: 0.7em;
`;
