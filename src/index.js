import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

import "./styles.css";

import Accordion from "./Accordion";

const StyledAccordionWrapper = styled(Accordion.AccordionItem)`
  background-color: white;
  border-radius: 4;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
`;

const StyledAccordionHeader = styled(Accordion.AccordionHeader)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccordionContent = styled(Accordion.AccordionContent)`
  display: flex;
  justifycontent: center;
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

// const CustomAccordion = props => {
//   const { open, style, ...restProps } = props;
//   return (
//     <Accordion.AccordionItem
//       open={open}
//       style={{
//         boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
//         borderRadius: 4,
//         backgroundColor: "#fff",
//         ...style
//       }}
//       title={(
//         isAccordionOpen,
//         { id: accordionIdentifier, onAccordionItemClick }
//       ) => (
//         <AccordionItemHeader
//           onClick={event => onAccordionItemClick(event, accordionIdentifier)}
//         >
//           <StyledIcon open={isAccordionOpen} iconName="arrow_drop_down" />
//           <span>Some random text</span>
//           <h3 style={{ margin: 16 }}>Accordion </h3>
//         </AccordionItemHeader>
//       )}
//       body={() => (
//         <p style={{ padding: 16 }}>
//           This accordion is not a part of the accordion group above.
//         </p>
//       )}
//       {...restProps}
//     />
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenIndexList: ["1"],
      customAccordion: {
        open: true
      }
    };
  }
  customAccordionClick = () =>
    this.setState(prevState => ({
      ...prevState,
      customAccordion: {
        open: !prevState.customAccordion.open
      }
    }));

  render() {
    const { customAccordion } = this.state;
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
        <StyledAccordionWrapper open={customAccordion.open}>
          <StyledAccordionHeader
            onAccordionItemClick={this.customAccordionClick}
          >
            <h3 style={{ margin: 16 }}>Accordion </h3>
            <StyledIcon
              iconName="arrow_drop_down"
              open={customAccordion.open}
            />
          </StyledAccordionHeader>
          <StyledAccordionContent>
            <p style={{ padding: 16 }}>
              This accordion is not a part of the accordion group above.
            </p>
          </StyledAccordionContent>
        </StyledAccordionWrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

new Array(5);
