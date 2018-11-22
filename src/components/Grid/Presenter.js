import React from "react";
import Column from "./children/Column";

export default ({
  rootCoords,
  gridSize,
  cellProps: { length: cellLength }
}) => {
  return (
    <g transform={`translate(${rootCoords[0]} ${rootCoords[1]})`}>
      <rect
        className="background"
        height={cellLength * gridSize[0]}
        width={cellLength * gridSize[1]}
        fill="red"
      />
      <Column cellProps={{ length: 20 }} />
    </g>
  );
};
