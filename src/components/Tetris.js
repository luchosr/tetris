import React from "react";
import { createStage } from "../gameHelpers";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  console.log(createStage());
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
