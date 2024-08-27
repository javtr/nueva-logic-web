import React from "react";
import installVid from "../assets/img/Installation.mp4"

export default function Install() {

  return (
    <div className="installation">
      <video controls>
        <source src={installVid} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
}
