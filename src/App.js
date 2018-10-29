import React from "react";
import Tree from "./Tree";

const svgWidth = 400;
const svgHeight = 200;

const data = {
  "name": "Eve",
  "children": [
    {
      "name": "Cain"
    },
    {
      "name": "Seth",
      "children": [
        {
          "name": "Enos"
        },
        {
          "name": "Noam"
        }
      ]
    },
    {
      "name": "Abel"
    },
    {
      "name": "Awan",
      "children": [
        {
          "name": "Enoch"
        }
      ]
    },
    {
      "name": "Azura"
    }
  ]
}

const svgAttributes = {
  width: svgWidth,
  height: svgHeight,
  style: {font: "10px sans-serif", stroke: "black", strokeWidth: 1},
  userselect: "none",
}
const containerAttributes = {
  style: {border: "1px solid black", position: "absolute"}
}

const treeProps = {
  direction: "down",
  rootPosition: [100, svgHeight / 2],
  spacing: {
    parentChild: 40,
    sibling: 10
  },
  data
}

const App = () => (
  <div {...containerAttributes}>
    <svg {...svgAttributes}>
        {
          <Tree {...treeProps}/>
        }
    </svg>
  </div>
)

export default App;
