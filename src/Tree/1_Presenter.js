import React, { Fragment } from "react";
import * as d3 from "d3";

let linkPathCreator;

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

const TreePresenter = ({
  rootPosition,
  direction,
  spacing: { parentChild: parentChildSpacing, sibling: siblingSpacing },
  data
}) => {
  const treeCreator = d3.tree().nodeSize([siblingSpacing, parentChildSpacing]);
  const root = d3.hierarchy(data);
  const tree = treeCreator(root);

  switch (direction) {
    case "right":
      linkPathCreator = d3
        .linkHorizontal()
        .x(d => d.y)
        .y(d => d.x);
      break;
    case "down":
      linkPathCreator = d3
        .linkVertical()
        .x(d => d.y)
        .y(d => d.x);
      break;
    case "left":
      linkPathCreator = d3
        .linkHorizontal()
        .x(d => d.y)
        .y(d => d.x);
      break;
    case "up":
      linkPathCreator = d3
        .linkVertical()
        .x(d => d.y)
        .y(d => d.x);
      break;
    default:
      linkPathCreator = d3
        .linkVertical()
        .x(d => d.y)
        .y(d => d.x);
  }

  const subTreeProps = {
    root: tree,
    direction
  };

  return (
    <g transform={`translate(${rootPosition[0]},${rootPosition[1]})`}>
      <SubTree {...subTreeProps} />
    </g>
  );
};

const SubTree = ({ root, direction }) => {
  let dxParent = 0;
  let dyParent = 0;
  if (root.parent) {
    switch (direction) {
      case "right":
        dxParent = root.x - root.parent.x;
        dyParent = root.y - root.parent.y;
        break;
      case "down":
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
        break;
      case "left":
        dxParent = root.parent.x - root.x;
        dyParent = root.parent.y - root.y;
        break;
      case "up":
        dxParent = root.parent.y - root.y;
        dyParent = root.parent.x - root.x;
        break;
      default:
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
    }
  }

  const arrowheadWidth = 3;
  const arrowheadHeight = 10;

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
            <path
              d={linkPathCreator({
                source: { x: -dxParent, y: -dyParent },
                target: { x: 0, y: 0 }
              })}
              markerEnd="url(#arrowhead)"
            />
          ) : null}
        </g>
      </g>
    </Fragment>
  );
};

export default TreePresenter;
