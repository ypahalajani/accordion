import React from "react";

import AnimatedSeparator from "./Separator";

const AccordionItem = props => {
  debugger;
  const { id, open, onAccordionHeaderClick, children, ...restProps } = props;
  if (!children) {
    return null;
  }
  const headerComponent = React.cloneElement(children[0], {
    onAccordionHeaderClick,
    id,
    open
  });
  const contentComponent = React.cloneElement(children[1], { open });
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
