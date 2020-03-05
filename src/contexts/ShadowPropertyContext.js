import React, { useState, createContext } from "react";

export const ShadowPropertyContext = createContext();

export const ShadowPropertyProvider = ({ children }) => {
  const [shiftHorizontically, setShiftHorizontically] = useState(20);
  const [shiftVertically, setShiftVertically] = useState(14);
  const [blurValue, setBlurValue] = useState(10);
  const [opacityValue, setOpacityValue] = useState(12);

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

  return (
    <ShadowPropertyContext.Provider
      value={{
        shiftHorizontically,
        ChangeShiftHorizontically,
        shiftVertically,
        ChangeShiftVertically,
        blurValue,
        ChangeBlurValue,
        opacityValue,
        ChangeOpacityValue
      }}
    >
      {children}
    </ShadowPropertyContext.Provider>
  );
};
