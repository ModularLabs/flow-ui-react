# flow-ui-react

A visualization react component library

## Quickstart

```bash
npm i flow-ui-react
```

```javascript
import { Tree } from "flow-ui-react";

const data = {
  name: "Bob",
  children: [
    { name: "Jane" },
    {
      name: "Cindy",
      children: [{ name: "Billy" }]
    }
  ]
};

const treeProps = {
  direction: "down",
  rootPosition: [svgWidth / 2, svgHeight / 2],
  spacing: {
    parentChild: 100,
    sibling: 20
  },
  nodeDiameter: 10,
  data
};

const App = () => (
  <div>
    <svg>{<Tree {...treeProps} />}</svg>
  </div>
);
```

## API

### Link

### Node

### Tree

Uses Link and Node components
