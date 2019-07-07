import React from "react";
import styled from "styled-components";

import Accordion from "../Accordion";
import StyledIcon from "../StyledIcon";

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
`;

class AccordionGroupExample extends React.Component {
  state = {
    currentlyOpened: [],
    list: new Array(4).fill({}).map((item, index) => ({ id: index }))
  };
  onAccordionHeaderClick = () => {};
  render() {
    const { currentlyOpened, list } = this.state;
    return (
      <React.Fragment>
        <h3 style={{ marginLeft: 16 }}>
          AccordionGroup that allows opening only one panel at a time.
        </h3>
        <Accordion.AccordionGroup currentlyOpened={currentlyOpened}>
          {list.map(item => (
            <StyledAccordionWrapper key={item.id} id={item.id}>
              <StyledAccordionHeader>
                {accordionOpen => (
                  <React.Fragment>
                    <h3 style={{ margin: 16 }}>Accordion {item.id + 1}</h3>
                    <StyledIcon
                      iconName="arrow_drop_down"
                      open={accordionOpen}
                    />
                  </React.Fragment>
                )}
              </StyledAccordionHeader>
              <StyledAccordionContent>
                <p style={{ padding: 16 }}>
                  This acoordion panel is a part of the accordion group.
                </p>
              </StyledAccordionContent>
            </StyledAccordionWrapper>
          ))}
        </Accordion.AccordionGroup>
        <hr />
        <h3 style={{ marginLeft: 16 }}>
          AccordionGroup that allows opening multiple panels at a time.
        </h3>
        <Accordion.AccordionGroup
          allowMultipleOpen
          currentlyOpened={currentlyOpened}
        >
          {list.map(item => (
            <StyledAccordionWrapper key={item.id} id={item.id}>
              <StyledAccordionHeader>
                {accordionOpen => (
                  <React.Fragment>
                    <h3 style={{ margin: 16 }}>Accordion {item.id + 1}</h3>
                    <StyledIcon
                      iconName="arrow_drop_down"
                      open={accordionOpen}
                    />
                  </React.Fragment>
                )}
              </StyledAccordionHeader>
              <StyledAccordionContent>
                <p style={{ padding: 16 }}>
                  This acoordion panel is a part of the accordion group.
                </p>
              </StyledAccordionContent>
            </StyledAccordionWrapper>
          ))}
        </Accordion.AccordionGroup>
      </React.Fragment>
    );
  }
}

export default AccordionGroupExample;
