import React from "react";

const nodeCircleAttributes = {
  r: 2.5,
  fill: "#555"
};

const NodePresenter = () => <circle {...nodeCircleAttributes} />;

export default NodePresenter;
