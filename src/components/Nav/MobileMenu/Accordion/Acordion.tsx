import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionList
} from "./AcordionStyle";
interface Props {
  title: string;
  content: string[];
  activeIndex: number;
}

const Accordion: React.FC<Props> = ({ title, content, activeIndex }) => {
  const [index, setIndex] = useState(1);
  const handleToggle = () => {};
  return (
    <AccordionContainer>
      <AccordionContent onClick={handleToggle}>{title}</AccordionContent>
      {content.length < 1 ? (
        <AccordionList index={index} activeId={activeIndex}>
          Loading..
        </AccordionList>
      ) : (
        content.map((item, key) => (
          <AccordionList index={index} activeId={activeIndex} key={key}>
            {item.replace("_", " ")}
          </AccordionList>
        ))
      )}
    </AccordionContainer>
  );
};

export default Accordion;
