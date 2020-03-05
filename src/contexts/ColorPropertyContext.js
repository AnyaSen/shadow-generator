import React, { useState, createContext } from "react";

export const ColorPropertyContext = createContext();

export const ColorPropertyProvider = ({ children }) => {
  const [boxColor, setBoxColor] = useState("#f3f3f3");
  const [shadowColor, setShadowColor] = useState("#999999");
  const [bgColor, setBgColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#808080");

  const ChangeBoxColor = newColor => {
    setBoxColor(newColor.hex);
  };
  const ChangeShadowColor = newColor => {
    setShadowColor(newColor.hex);
  };
  const ChangeBgColor = newColor => {
    setBgColor(newColor.hex);
  };
  const ChangeBorderColor = newColor => {
    setBorderColor(newColor.hex);
  };

  return (
    <ColorPropertyContext.Provider
      value={{
        boxColor,
        ChangeBoxColor,
        ChangeShadowColor,
        shadowColor,
        ChangeBgColor,
        bgColor,
        ChangeBorderColor,
        borderColor
      }}
    >
      {children}
    </ColorPropertyContext.Provider>
  );
};
