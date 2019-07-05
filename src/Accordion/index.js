import React from "react";

import AccordionGroup from "./AccordionGroup";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  static AccordionGroup = AccordionGroup;
  static AccordionItem = AccordionItem;
  render() {
    return this.props.children;
  }
}

export default Accordion;
