import React from "react";
import { useParams } from "react-router-dom";

export const BackgroundColorChanger = () => {
  let { colorname } = useParams();
  return (
    <main
      className="bgcolorchange"
      style={{ height: "100vh", backgroundColor: `${colorname}` }}
    >
      Background Color Changer
    </main>
  );
};
