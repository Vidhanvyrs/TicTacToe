import React from "react";
import "./Alert.css";
const Alert = (props) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Bangers&family=Bungee+Spice&family=Climate+Crisis&family=Fredoka+One&family=Inspiration&family=Modak&family=Press+Start+2P&family=Shadows+Into+Light&family=Silkscreen&family=Smokum&display=swap"
        rel="stylesheet"
      />
      <div className="alert">
        <div className="inner">
          <div className="alertion">Choose your symbol:</div>
          <button className="foroplayer" onClick={props.Oclicker}>
            O
          </button>
          <button className="forxplayer" onClick={props.Xclicker}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
export default Alert;
