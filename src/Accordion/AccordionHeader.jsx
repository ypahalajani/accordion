import React from "react";

const AccordionHeader = props => {
  const { onAccordionHeaderClick, style, children, id, ...restProps } = props;
  return (
    <div
      onClick={event => onAccordionHeaderClick(event, id)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default AccordionHeader;
