import React from "react";
import { Spring } from "react-spring/renderprops";

class AccordionGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenIndexList: props.currentOpenIndexList
    };
    this.onAccordionItemClick = this.onAccordionItemClick.bind(this);
  }
  onAccordionItemClick(event, accordionIdentifier) {
    const { currentOpenIndexList } = this.state;
    const { allowMultipleOpen } = this.props;
    let nextState = [...currentOpenIndexList];
    if (allowMultipleOpen) {
      const alreadyOpenIndex = nextState.indexOf(accordionIdentifier);
      if (alreadyOpenIndex !== -1) {
        nextState.splice(alreadyOpenIndex, 1);
      } else {
        nextState.push(accordionIdentifier);
      }
    } else {
      const alreadyOpenIndex = nextState.indexOf(accordionIdentifier);
      nextState = alreadyOpenIndex === -1 ? [accordionIdentifier] : [];
    }
    this.setState({ currentOpenIndexList: nextState });
  }
  render() {
    // TODO: throw a warning when user is passing an allowMultipleOpen
    // prop along with their custom onAccordionClick callback for handling
    // custom  accordion toggling logic.
    const { currentOpenIndexList } = this.state;
    const { children, onAccordionItemClick } = this.props;
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
              onAccordionItemClick:
                onAccordionItemClick || this.onAccordionItemClick,
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
