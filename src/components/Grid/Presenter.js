import React from "react";
import Column from "./children/Column";

const gridProps = {
  cellLength: 40,
  gridSize: [10, 20],
  dotsVisible: true,
  dotProps: {
    color: "#fff",
    diameter: 5
  },
  numbering: false,
  rootCoords: [15, 25]
};

export default () => (
  <g
    transform={`translate(${gridProps.rootCoords[0]} ${
      gridProps.rootCoords[1]
    })`}
  >
    <rect
      className="background"
      height={gridProps.cellLength * gridProps.gridSize[0]}
      width={gridProps.cellLength * gridProps.gridSize[1]}
      fill="red"
    />
    <Column cellProps={{ length: 20 }} />
  </g>
);
