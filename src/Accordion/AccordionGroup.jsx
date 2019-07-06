import React from "react";
import { Spring } from "react-spring/renderprops";

class AccordionGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyOpened: props.currentlyOpened
    };
    this.onAccordionHeaderClick = this.onAccordionHeaderClick.bind(this);
  }
  onAccordionHeaderClick(event, accordionIdentifier) {
    const { currentlyOpened } = this.state;
    const { allowMultipleOpen } = this.props;
    let nextState = [...currentlyOpened];
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
    this.setState({ currentlyOpened: nextState });
  }
  render() {
    // TODO: throw a warning when user is passing an allowMultipleOpen
    // prop along with their custom onAccordionClick callback for handling
    // custom  accordion toggling logic.
    const { currentlyOpened } = this.state;
    const { children, onAccordionHeaderClick } = this.props;
    return React.Children.map(children, (child, index) => {
      const isFirst = index === 0;
      const isLast = index + 1 === children.length;
      const isAccordionOpen = currentlyOpened.indexOf(child.props.id) !== -1;
      return (
        <Spring
          from={{ marginTop: 4, marginBottom: 4 }}
          to={{
            marginTop: isAccordionOpen && !isFirst ? 16 : 4,
            marginBottom: isAccordionOpen && !isLast ? 16 : 4
          }}
        >
          {props => {
            debugger;
            return React.cloneElement(child, {
              onAccordionHeaderClick:
                onAccordionHeaderClick || this.onAccordionHeaderClick,
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
