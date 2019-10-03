import React from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionList
} from "./AcordionStyle";
interface Props {
  title: string;
  content: string[];
}

const Accordion: React.FC<Props> = ({ title, content }) => {
  return (
    <AccordionContainer>
      <AccordionContent>{title}</AccordionContent>
      {content.length < 1 ? (
        <AccordionList>Loading..</AccordionList>
      ) : (
        content.map((item, key) => (
          <AccordionList key={key}>{item.replace("_", " ")}</AccordionList>
        ))
      )}
    </AccordionContainer>
  );
};

export default Accordion;
