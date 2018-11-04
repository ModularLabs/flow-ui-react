import React from "react";

const arrowheadWidth = 3;
const arrowheadHeight = 10;
const ArrowHeadDefs = () => (
  <defs>
    <marker
      id="arrowhead"
      markerWidth={arrowheadHeight}
      markerHeight="10"
      refX={arrowheadHeight}
      refY={arrowheadWidth}
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path
        d={`M0,0 L0,${arrowheadWidth *
          2} L${arrowheadHeight},${arrowheadWidth} z`}
      />
    </marker>
  </defs>
);

export default ArrowHeadDefs;
