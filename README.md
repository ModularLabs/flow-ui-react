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

## Local Development

### Establish link

1. Create output link
```bash
# from /flow-ui-react
yarn link
``` 

2. Create input link
```bash
# from /my-other-project
yarn link flow-ui-react
```

### Making changes

1. Make sure you're linked

2. Build
```bash
yarn build
```

## Publishing to npm

1. 
