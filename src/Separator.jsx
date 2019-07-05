import React from "react";
import { Spring, config } from "react-spring/renderprops";

const Separator = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Spring
      from={{ width: "0%" }}
      to={{
        width: props.visible ? "100%" : "0%"
      }}
      config={config.slow}
    >
      {({ width }) => (
        <div style={{ borderBottom: "1px solid #ededed", width }} />
      )}
    </Spring>
  </div>
);

export default Separator;
