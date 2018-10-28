import React from 'react';
import * as d3 from "d3"

const linkPathCreator = d3
  .linkHorizontal()
  .x(d => d.y)
  .y(d => d.x)

const linkGroupAttributesCreator = () => ({
  fill: "none",
  stroke: "#555",
  strokeOpacity: 0.4,
  strokeWidth: 1.5
});
const nodeCircleAttributesCreator = node => ({
  r: 2.5,
  fill: node.children ? "#555" : "#999"
})

const TreePresenter = ({
  rootPosition,
  direction,
  spacing: { parentChild: parentChildSpacing, sibling: siblingSpacing },
  data
}) => {
  const tree = d3.tree().nodeSize([siblingSpacing, parentChildSpacing]);
  const root = d3.hierarchy(data);
  const treeWithDims = tree(root)

  return (
    <g transform={`translate(${rootPosition[0]},${rootPosition[1]})`}>
      <SubTree root={treeWithDims}/>
    </g>
  )
}

const SubTree = ({ root }) => {
  let dxParent = 0;
  let dyParent = 0;
  if(root.parent) {
    dxParent = root.x - root.parent.x;
    dyParent = root.y - root.parent.y;
  }
  return (
    <g transform={`translate(${dyParent},${dxParent})`} className="tree">
      <g className="nodes">
        <circle {...nodeCircleAttributesCreator(root)}/>
          {
            root.children ? 
              <g className="children">
                {root.children.map((child, key) => <SubTree root={child} key={key}/>)}
              </g> :
              null
          }
      </g>
      <g {...linkGroupAttributesCreator()} className="links">
        {
          root.parent ? 
          <path d={linkPathCreator({
            source: {x:  -dxParent, y: -dyParent },
            target: {x: 0, y: 0 }
          })}/> :
          null
        }
      </g>
    </g>
  )
}

export default TreePresenter;
