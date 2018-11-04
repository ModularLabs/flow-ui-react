import React, { Fragment } from "react";

import Link from "../../../Link";
import Node from "../../../Node";
import ArrowheadDefs from "../ArrowheadDefs";
import { calculateProps } from "./utils";

const linkGroupAttributes = {
  fill: "none",
  stroke: "#555",
  strokeOpacity: 0.4,
  strokeWidth: 1.5
};

const SubTree = ({ root, direction }) => {
  const { dxParent, dyParent, linkConfig } = calculateProps(root, direction);

  return (
    <Fragment>
      <ArrowheadDefs />
      <g transform={`translate(${dyParent},${dxParent})`} className="tree">
        <g className="nodes">
          <Node />
          {root.children ? (
            <g className="children">
              {root.children.map((child, key) => (
                <SubTree root={child} key={key} direction={direction} />
              ))}
            </g>
          ) : null}
        </g>
        <g {...linkGroupAttributes} className="links">
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
                ...linkConfig
              }}
            />
          ) : null}
        </g>
      </g>
    </Fragment>
  );
};

export default SubTree;
