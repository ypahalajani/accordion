import React from "react";
import { Spring } from "react-spring/renderprops";
// import styled from "styled-components";

import AccordionItem from "./AccordionItem";

class AccordionGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      currentOpenIndexList: props.currentOpenIndexList
    };
    this.onAccordionItemClick = this.onAccordionItemClick.bind(this);
  }
  static AccordionItem = AccordionItem;
  onAccordionItemClick(event, accordionIdentifier) {
    debugger;
    const { data, currentOpenIndexList } = this.state;
    const foundIndex = data.findIndex(item => item.id === accordionIdentifier);
    if (foundIndex === -1) {
      return;
    }
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
    const { data, currentOpenIndexList } = this.state;
    const restProps = this.props;
    return data.map((item, index) => {
      const isFirst = index === 0;
      const isLast = index + 1 === data.length;
      const isAccordionOpen = currentOpenIndexList.indexOf(item.id) !== -1;
      return (
        <Spring
          from={{ marginTop: 4, marginBottom: 4 }}
          to={{
            marginTop: isAccordionOpen && !isFirst ? 12 : 4,
            marginBottom: isAccordionOpen && !isLast ? 12 : 4
          }}
        >
          {props => (
            <AccordionItem
              key={item.id.toString()}
              id={item.id}
              open={isAccordionOpen}
              onAccordionItemClick={this.onAccordionItemClick}
              style={{
                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
                borderRadius: 4,
                backgroundColor: "#fff",
                ...props
              }}
              {...restProps}
            />
          )}
        </Spring>
      );
    });
  }
}

export default AccordionGroup;
