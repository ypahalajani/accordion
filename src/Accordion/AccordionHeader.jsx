import React from "react";

const AccordionHeader = props => {
  const { onAccordionItemClick, style, children, ...restProps } = props;
  return (
    <div onClick={onAccordionItemClick} style={style} {...restProps}>
      {children}
    </div>
  );
};

export default AccordionHeader;
