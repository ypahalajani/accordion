import React from "react";

import AnimatedSeparator from "./Separator";
import AccordionContent from "./AccordionContent";

const AccordionItem = props => {
  debugger;
  const {
    id,
    open,
    onAccordionHeaderClick,
    title,
    body,
    children,
    ...restProps
  } = props;
  let headerComponent = title ? title(open, id) : null;
  let contentComponent = body ? (
    <AccordionContent open={open}>{body(open)}</AccordionContent>
  ) : null;
  if (children) {
    headerComponent = React.cloneElement(children[0], {
      onAccordionHeaderClick,
      id
    });
    contentComponent = React.cloneElement(children[1], { open });
  }
  return (
    <div {...restProps}>
      {/* Animated Title */}
      {headerComponent}
      {/* Animated Separator */}
      <AnimatedSeparator visible={open} />
      {/* Animated Body  */}
      {contentComponent}
    </div>
  );
};

export default AccordionItem;
