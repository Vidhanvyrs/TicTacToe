import React from "react";
const Refresh = () => {
  function onrefresh() {
    window.location.reload();
  }
  return (
    <div>
      <button className="refresh" onClick={onrefresh}>
        <span className="refresh-icon">&#x21bb;</span>
      </button>
    </div>
  );
};
export default Refresh;
