import styled from "styled-components";
import colours from "../../colours";
import fonts from "../../fonts";
export const Container = styled.div`
  font-family: ${fonts.greatVibes};
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Image = styled.img`
  width: 3.5em;
  height: 3.5em;
  padding: 0;
  margin: 0;
`;
export const Text = styled.span`
  font-size: 1.5em;
  padding: 0;
  margin-top: 0.7em;
  color: ${colours.primaryText};
  font-weight: 700;
`;
