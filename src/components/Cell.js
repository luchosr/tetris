import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return <StyledCell tyoe={"L"} color={TETROMINOS["L"].color} />;
};

export default Cell;
