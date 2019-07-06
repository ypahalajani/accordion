import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Examples from "./examples";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenIndexList: ["1"]
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Accordion.AccordionGroup
          allowMultipleOpen
          currentOpenIndexList={currentOpenIndexList}
        >
          <CustomAccordion id="1" />
          <CustomAccordion id="2" />
          <CustomAccordion id="3" />
        </Accordion.AccordionGroup> */}
        <hr />
        <Examples.AccordionItemExample />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

new Array(5);
