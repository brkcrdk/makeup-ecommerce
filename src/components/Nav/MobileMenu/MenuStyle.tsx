import styled from "styled-components";
interface Toggle {
  toggle: boolean;
}
export const AccordionContainer = styled.ul`
  position: absolute;
  text-transform: capitalize;
  margin-top: 4em;
  padding: 0;
  transition: transform 1s ease-in-out;
  transform: ${(p: Toggle) =>
    p.toggle ? "translateX(0)" : "translateX(-100%)"};
`;

export const AccordionTitle = styled.li`
  list-style: none;
`;
export const AccordionIcon = styled.i``;
export const AccordionContent = styled.p``;
