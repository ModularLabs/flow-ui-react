import React, { Fragment } from "react";

import Link from "../../../Link";
import ArrowheadDefs from "../ArrowheadDefs";

const linkGroupAttributesCreator = () => ({
  fill: "none",
  stroke: "#555",
  strokeOpacity: 0.4,
  strokeWidth: 1.5
});
const nodeCircleAttributesCreator = node => ({
  r: 2.5,
  fill: node.children ? "#555" : "#999"
});

const SubTree = ({ root, direction }) => {
  let dxParent = 0;
  let dyParent = 0;
  let linkArrowConfig;

  if (root.parent) {
    switch (direction) {
      case "right":
        dxParent = root.x - root.parent.x;
        dyParent = root.y - root.parent.y;
        linkArrowConfig = {
          type: "curvedHorizontal",
          arrowheadDirection: "end"
        };
        break;
      case "down":
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
        linkArrowConfig = {
          type: "curvedVertical",
          arrowheadDirection: "start"
        };
        break;
      case "left":
        dxParent = root.parent.x - root.x;
        dyParent = root.parent.y - root.y;
        linkArrowConfig = {
          type: "curvedHorizontal",
          arrowheadDirection: "start"
        };
        break;
      case "up":
        dxParent = root.parent.y - root.y;
        dyParent = root.parent.x - root.x;
        linkArrowConfig = {
          type: "curvedVertical",
          arrowheadDirection: "end"
        };
        break;
      default:
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
        linkArrowConfig = {
          type: "curvedVertical",
          arrowheadDirection: "start"
        };
    }
  }

  return (
    <Fragment>
      <ArrowheadDefs />
      <g transform={`translate(${dyParent},${dxParent})`} className="tree">
        <g className="nodes">
          <circle {...nodeCircleAttributesCreator(root)} />
          {root.children ? (
            <g className="children">
              {root.children.map((child, key) => (
                <SubTree root={child} key={key} direction={direction} />
              ))}
            </g>
          ) : null}
        </g>
        <g {...linkGroupAttributesCreator()} className="links">
          {root.parent ? (
            <Link
              {...{
                coordinates: {
                  start: { x: -dxParent, y: -dyParent },
                  end: { x: 0, y: 0 }
                },
                arrowheadDimensions: {
                  height: 3,
                  width: 10
                },
                ...linkArrowConfig
              }}
            />
          ) : null}
        </g>
      </g>
    </Fragment>
  );
};

export default SubTree;
