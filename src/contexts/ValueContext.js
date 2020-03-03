import React, { useState, createContext } from "react";

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [heightValue, setHeightValue] = useState(45);
  const [widthValue, setWidthValue] = useState(45);
  const [radiusValue, setRadiusValue] = useState(1);
  const [shiftHorizontically, setShiftHorizontically] = useState(1.25);
  const [shiftVertically, setShiftVertically] = useState(0.85);
  const [blurValue, setBlurValue] = useState(0.625);
  const [opacityValue, setOpacityValue] = useState(0.75);
  const [borderValue, setBorderValue] = useState(0);
  const [boxColor, setBoxColor] = useState("#f3f3f3");
  const [shadowColor, setShadowColor] = useState("#999999");
  const [bgColor, setBgColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#808080");

  const ChangeHeightValue = (event, newValue) => {
    setHeightValue(newValue);
  };
  const ChangeWidthValue = (event, newValue) => {
    setWidthValue(newValue);
  };
  const ChangeBorderValue = (event, newValue) => {
    setBorderValue(newValue);
  };
  const ChangeRadiusValue = (event, newValue) => {
    setRadiusValue(newValue);
  };
  const ChangeShiftHorizontically = (event, newValue) => {
    setShiftHorizontically(newValue);
  };
  const ChangeShiftVertically = (event, newValue) => {
    setShiftVertically(newValue);
  };
  const ChangeBlurValue = (event, newValue) => {
    setBlurValue(newValue);
  };
  const ChangeOpacityValue = (event, newValue) => {
    setOpacityValue(newValue);
  };
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
    <ValueContext.Provider
      value={{
        heightValue,
        ChangeHeightValue,
        widthValue,
        ChangeWidthValue,
        borderValue,
        ChangeBorderValue,
        radiusValue,
        ChangeRadiusValue,
        shiftHorizontically,
        ChangeShiftHorizontically,
        shiftVertically,
        ChangeShiftVertically,
        blurValue,
        ChangeBlurValue,
        opacityValue,
        ChangeOpacityValue,
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
    </ValueContext.Provider>
  );
};
