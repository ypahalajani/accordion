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
        <Examples.AccordionItemExample />
        <hr />
        <Examples.AccordionGroupExample />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

new Array(5);
