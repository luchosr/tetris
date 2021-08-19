import { useState } from "react";

import { createStage } from "../gameHelpers";

export const useStage = () => {
  const [stage, setStage] = useStage(createStage());

  return [stage, setStage];
};
