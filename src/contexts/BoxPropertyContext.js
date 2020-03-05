import React, { useState, createContext } from "react";

export const BoxPropertyContext = createContext();

export const BoxPropertyProvider = ({ children }) => {
  const [heightValue, setHeightValue] = useState(350);
  const [widthValue, setWidthValue] = useState(350);
  const [radiusValue, setRadiusValue] = useState(16);
  const [borderValue, setBorderValue] = useState(0);

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

  return (
    <BoxPropertyContext.Provider
      value={{
        heightValue,
        ChangeHeightValue,
        widthValue,
        ChangeWidthValue,
        borderValue,
        ChangeBorderValue,
        radiusValue,
        ChangeRadiusValue
      }}
    >
      {children}
    </BoxPropertyContext.Provider>
  );
};
