import { mapProps } from "recompose";
import * as d3 from "d3";

import TreePresenter from "./2_Presenter";

const TreePropsMap = mapProps(inputProps => {
  const {
    rootPosition,
    direction,
    spacing: { parentChild: parentChildSpacing, sibling: siblingSpacing },
    data
  } = inputProps;

  const treeCreator = d3.tree().nodeSize([siblingSpacing, parentChildSpacing]);
  const root = treeCreator(d3.hierarchy(data));

  const outputProps = {
    root,
    direction,
    rootPosition
  };

  return outputProps;
})(TreePresenter);

export default TreePropsMap;
