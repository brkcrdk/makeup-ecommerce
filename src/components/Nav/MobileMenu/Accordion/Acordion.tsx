import React from "react";
import {
  AccordionContent,
  AccordionTitle,
  AccordionList
} from "./AcordionStyle";
interface Props {
  title: string;
  content: string[];
}

const Accordion: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <AccordionContent>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionList>BUrat</AccordionList>
      </AccordionContent>
    </>
  );
};

export default Accordion;
