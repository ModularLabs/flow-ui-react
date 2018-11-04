import React from "react";
import * as d3 from "d3";

const LinkPresenter = ({
  // arrowHeadDirection: "curvedHorizontal" || "curvedVertical" || "straight"
  type = "curvedVertical",
  // arrowHeadDirection: "start" || "end" || "both" || "none"
  arrowHeadDirection = "start",
  coordinates: { start: startCoordinates, end: endCoordinates },
  arrowheadDimensions: {
    height: arrowheadHeight = 3,
    width: arrowheadWidth = 10
  }
}) => {
  let linkPathCreator;
  switch (type) {
    case "curvedHorizontal":
      linkPathCreator = d3
        .linkHorizontal()
        .x(d => d.y)
        .y(d => d.x);
      break;
    default:
      linkPathCreator = d3
        .linkVertical()
        .x(d => d.y)
        .y(d => d.x);
  }

  return (
    <path
      d={linkPathCreator({
        source: startCoordinates,
        target: endCoordinates
      })}
      markerEnd="url(#arrowhead)"
    />
  );
};

export default LinkPresenter;
