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
  const [index, setIndex] = useState(-1);
  //Accordion toggle
  const handleToggle = () => {
    if (index !== activeIndex) return setIndex(activeIndex);
    if (index === activeIndex) return setIndex(-1);
  };
  console.log(index);
  return (
    <AccordionContainer>
      <AccordionContent
        index={index}
        activeId={activeIndex}
        onClick={handleToggle}>
        {title} <span>&#10148;</span>
      </AccordionContent>
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
