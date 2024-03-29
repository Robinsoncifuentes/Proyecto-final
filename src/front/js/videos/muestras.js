import React from "react";
import ReactPlayer from "react-player";
import "./fotos/muestras.css";

const Muestras = () => {
  return (
    <div className="fotos mt-3 mx-auto">
      <div className="masonry">
        <div className="item">
          1
          <img src="https://picsum.photos/id/1039/800/500" />
        </div>
        <div className="item">
          2
          <img src="https://picsum.photos/id/1043/800/500" />
        </div>
        <div className="item">
          3
          <img src="https://picsum.photos/id/1044/800/500" />
        </div>

        <div className="item">
          4
          <img src="https://picsum.photos/id/1050/800/500" />
        </div>

        <div className="item">
          5
          <img src="https://picsum.photos/id/1057/800/500" />
        </div>

        <div className="item">
          6
          <img src="https://picsum.photos/id/15/800/500" />
        </div>
      </div>
    </div>
  );
};
export default Muestras;
