import React from "react";

import AnimatedSeparator from "./Separator";
import AccordionContent from "./AccordionContent";

const AccordionItem = props => {
  const {
    open,
    onAccordionItemClick,
    title,
    body,
    children,
    ...restProps
  } = props;
  let headerComponent = title ? title(open, restProps) : null;
  let contentComponent = body ? (
    <AccordionContent open={open}>{body(open, restProps)}</AccordionContent>
  ) : null;
  if (children) {
    headerComponent = React.cloneElement(children[0]);
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
