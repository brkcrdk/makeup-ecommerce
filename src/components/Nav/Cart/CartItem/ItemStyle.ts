import styled from "styled-components";
import { colours } from "../../../utils";

export const Container = styled.div`
  display: flex;
  margin-top: -1em;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;
export const CartHeader = styled.h4`
  padding-bottom: 0.5em;
`;
export const CartImg = styled.img`
  width: 3em;
  height: 3em;
`;
export const CartInfo = styled.div`
  width: 95%;
  padding: 1em;
  font-size: 1em;
  display: grid;
  grid-gap: 0.2em;
  button {
    background: transparent;
    border: none;
    padding: 0.5em;
    outline: none;
    cursor: pointer;
  }
`;
export const CartName = styled.h4``;
export const CartPrice = styled.p`
  margin-top: -1em;
  text-align: left;
`;
export const CartRemove = styled.button`
  margin-right: 0.3em;
  text-align: right;
  background-color: transparent;
  font-size: 1.1em;
  border: none;
  outline: none;
  color: ${colours.primaryText};
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
  }
`;
export const Splitter = styled.hr`
  margin-top: -1em;
  width: 95%;
  border: 0.5px solid ${colours.secondaryText};
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 1em;
    border: 1px solid ${colours.secondaryText};
    background-color: transparent;
  }
`;
