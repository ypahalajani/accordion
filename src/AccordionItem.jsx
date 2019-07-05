import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";

import AnimatedSeparator from "./Separator";

const AccordionItemBody = styled.div`
  overflow: hidden;
`;

const AccordionItem = props => {
  const { open, title, body, ...restProps } = props;
  return (
    <div {...restProps}>
      {/* Animated Title */}
      {title(open, restProps)}
      {/* Animated Separator */}
      <AnimatedSeparator visible={open} />
      {/* Animated Body  */}
      <Spring from={{ height: 0 }} to={{ height: open ? "auto" : 0 }}>
        {props => (
          <AccordionItemBody style={props}>
            {body(open, restProps)}
          </AccordionItemBody>
        )}
      </Spring>
    </div>
  );
};

export default AccordionItem;
