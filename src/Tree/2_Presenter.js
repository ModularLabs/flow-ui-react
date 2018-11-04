import React from "react";

import SubTree from "./children/SubTree";

const TreePresenter = ({ root, direction, rootPosition }) => {
  const subTreeProps = {
    root,
    direction
  };

  return (
    <g transform={`translate(${rootPosition[0]},${rootPosition[1]})`}>
      <SubTree {...subTreeProps} />
    </g>
  );
};

export default TreePresenter;
