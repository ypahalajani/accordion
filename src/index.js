import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

import "./styles.css";

import Accordion from "./Accordion";

const AccordionItemHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = ({ open, iconName }) => (
  <Spring
    from={{ transform: "rotate(0deg)" }}
    to={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)"
    }}
  >
    {props => (
      <i className="material-icons" style={{ ...props, padding: 16 }}>
        {iconName || "keyboard_arrow_down"}
      </i>
    )}
  </Spring>
);

const CustomAccordion = props => {
  const { open, style, ...restProps } = props;
  return (
    <Accordion.AccordionItem
      open={open}
      style={{
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
        borderRadius: 4,
        backgroundColor: "#fff",
        ...style
      }}
      title={(
        isAccordionOpen,
        { id: accordionIdentifier, onAccordionItemClick }
      ) => (
        <AccordionItemHeader
          onClick={event => onAccordionItemClick(event, accordionIdentifier)}
        >
          <StyledIcon open={isAccordionOpen} iconName="arrow_drop_down" />
          <span>Some random text</span>
          <h3 style={{ margin: 16 }}>Accordion </h3>
        </AccordionItemHeader>
      )}
      body={() => (
        <p style={{ padding: 16 }}>
          This accordion is not a part of the accordion group above.
        </p>
      )}
      {...restProps}
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new Array(4).fill({}).map((item, index) => ({
        id: index
      })),
      currentOpenIndexList: []
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
    const { customAccordion, currentOpenIndexList } = this.state;
    return (
      <div className="App">
        <Accordion.AccordionGroup
          currentOpenIndexList={currentOpenIndexList}
          onAccordionItemClick={this.onAccordionItemClick}
        >
          <CustomAccordion id="1" />
          <CustomAccordion id="2" />
          <CustomAccordion id="3" />
        </Accordion.AccordionGroup>
        <hr />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

new Array(5);
