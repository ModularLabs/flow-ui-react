import React, { Fragment } from "react";
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
    <Fragment>
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
      <path
        d={linkPathCreator({
          source: startCoordinates,
          target: endCoordinates
        })}
        markerEnd="url(#arrowhead)"
      />
    </Fragment>
  );
};

export default LinkPresenter;
