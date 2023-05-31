import React from "react";
import Refresh from "./Refresh";
const Winner = (props) => {
  return (
    <div>
      <Refresh />
      <div className="status">{props.outcome}</div>
    </div>
  );
};
export default Winner;
