import React from "react";
import Cell from "../Cell";

export default ({ cellProps = {}, height = 4, coords = [0, 0] }) => {
  const { length: cellHeight } = cellProps;

  const array = [];
  for (let i = 0; i < height; i++) {
    array.push(null);
  }
  return (
    <g transform={`translate(${coords[0]} ${coords[1]})`}>
      {array.map((_, i) => {
        const newCellProps = {
          ...cellProps,
          coords: [0, cellHeight * i]
        };
        return <Cell {...newCellProps} key={i} />;
      })}
    </g>
  );
};
