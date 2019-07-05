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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new Array(4).fill({}).map((item, index) => ({
        id: index
      })),
      currentOpenIndexList: [],
      customAccordion: {
        open: true
      }
    };
  }
  render() {
    const { list, currentOpenIndexList, customAccordion } = this.state;
    return (
      <div className="App">
        <Accordion.AccordionGroup
          allowMultipleOpen
          data={list}
          currentOpenIndexList={currentOpenIndexList}
          title={(
            isAccordionOpen,
            { id: accordionIdentifier, onAccordionItemClick }
          ) => (
            <AccordionItemHeader
              onClick={event =>
                onAccordionItemClick(event, accordionIdentifier)
              }
            >
              <h3 style={{ margin: 16 }}>Accordion {accordionIdentifier}</h3>
              <StyledIcon open={isAccordionOpen} />
            </AccordionItemHeader>
          )}
          body={() => (
            <p style={{ padding: 16 }}>This is the content of the Accordion.</p>
          )}
        />
        <hr />
        <Accordion.AccordionItem
          id="random"
          open={customAccordion.open}
          onAccordionItemClick={() =>
            this.setState(prevState => ({
              ...prevState,
              customAccordion: {
                open: !prevState.customAccordion.open
              }
            }))
          }
          style={{
            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: 4,
            backgroundColor: "#fff"
          }}
          title={(
            isAccordionOpen,
            { id: accordionIdentifier, onAccordionItemClick }
          ) => (
            <AccordionItemHeader
              onClick={event =>
                onAccordionItemClick(event, accordionIdentifier)
              }
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
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

new Array(5);
