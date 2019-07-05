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
            marginTop: isAccordionOpen && !isFirst ? 16 : 4,
            marginBottom: isAccordionOpen && !isLast ? 16 : 4
          }}
        >
          {props => (
            <AccordionItem
              key={item.id.toString()}
              id={item.id}
              open={isAccordionOpen}
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
