import React, { useState } from "react";
import SplitFlapDisplay from "react-split-flap-display";

const Stats = () => {
  const [time, setTime] = useState("8,023");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];

  return (
    <div>
      <SplitFlapDisplay
        characterSet={[...numbers]}
        characterWidth="1em"
        value={time}
        fontSize="1em"
        borderColor="rgb(30, 30, 33)"
        background="rgb(34, 34, 34)"
      />
    </div>
  );
}

export default Stats;