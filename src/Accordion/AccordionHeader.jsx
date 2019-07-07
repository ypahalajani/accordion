import React from "react";

const AccordionHeader = props => {
  const {
    open,
    onAccordionHeaderClick,
    style,
    children,
    id,
    ...restProps
  } = props;
  return (
    <div
      onClick={event => onAccordionHeaderClick(event, id)}
      style={style}
      {...restProps}
    >
      {children(open)}
    </div>
  );
};

export default AccordionHeader;
