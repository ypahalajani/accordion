import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

import "./styles.css";

import AccordionGroup from "./AccordionGroup";

const AccordionItemHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new Array(4).fill({}).map((item, index) => ({
        id: index
      })),
      currentOpenIndexList: []
    };
  }
  render() {
    const { list, currentOpenIndexList } = this.state;
    return (
      <div className="App">
        <AccordionGroup
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
              <Spring
                from={{ transform: "rotate(0deg)" }}
                to={{
                  transform: isAccordionOpen ? "rotate(180deg)" : "rotate(0deg)"
                }}
              >
                {props => (
                  <i
                    className="material-icons"
                    style={{ ...props, padding: 16 }}
                  >
                    keyboard_arrow_down
                  </i>
                )}
              </Spring>
            </AccordionItemHeader>
          )}
          body={() => (
            <p style={{ padding: 16 }}>
              This is the content of the Accordion content.
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
