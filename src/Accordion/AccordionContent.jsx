import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

const AccordionItemBody = styled.div`
  overflow: hidden;
`;
const AccordionContent = props => {
  const {
    open = false,
    children = null,
    style: contentStyles = {},
    ...restProps
  } = props;
  return (
    <Spring from={{ height: 0 }} to={{ height: open ? "auto" : 0 }}>
      {props => (
        <AccordionItemBody
          style={{ ...props, ...contentStyles }}
          {...restProps}
        >
          {children}
        </AccordionItemBody>
      )}
    </Spring>
  );
};

export default AccordionContent;
