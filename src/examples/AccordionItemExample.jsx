import React from "react";
import styled from "styled-components";

import Accordion from "../Accordion";
import StyledIcon from "../StyledIcon";

const StyledAccordionWrapper = styled(Accordion.AccordionItem)`
  background-color: white;
  border-radius: 4px;
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
  justify-content: center;
`;

class AccordionItemExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customAccordion: {
        open: false
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
      <React.Fragment>
        <h3 style={{ marginLeft: 16 }}>AccordionItem</h3>
        <StyledAccordionWrapper
          open={customAccordion.open}
          onAccordionHeaderClick={this.customAccordionClick}
        >
          <StyledAccordionHeader>
            {accordionOpen => (
              <React.Fragment>
                <h3 style={{ margin: 16 }}>Accordion </h3>
                <StyledIcon iconName="arrow_drop_down" open={accordionOpen} />
              </React.Fragment>
            )}
          </StyledAccordionHeader>
          <StyledAccordionContent>
            <p style={{ padding: 16 }}>
              This accordion is not a part of the accordion group above.
            </p>
          </StyledAccordionContent>
        </StyledAccordionWrapper>
      </React.Fragment>
    );
  }
}

export default AccordionItemExample;
