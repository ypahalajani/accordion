import React from "react";
import { Spring } from "react-spring/renderprops";

class AccordionGroup extends React.Component {
  render() {
    const { onAccordionItemClick, children, currentOpenIndexList } = this.props;
    return React.Children.map(children, (child, index) => {
      const isFirst = index === 0;
      const isLast = index + 1 === children.length;
      const isAccordionOpen =
        currentOpenIndexList.indexOf(child.props.id) !== -1;
      return (
        <Spring
          from={{ marginTop: 4, marginBottom: 4 }}
          to={{
            marginTop: isAccordionOpen && !isFirst ? 16 : 4,
            marginBottom: isAccordionOpen && !isLast ? 16 : 4
          }}
        >
          {props => {
            return React.cloneElement(child, {
              onAccordionItemClick: onAccordionItemClick,
              open: isAccordionOpen,
              style: props
            });
          }}
        </Spring>
      );
    });
  }
}

export default AccordionGroup;
