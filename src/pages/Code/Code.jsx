import React, { useContext } from "react";
import Styles from "./Code.module.scss";
import { Link } from "react-router-dom";
import hexToRgba from "hex-to-rgba";

import { ValueContext } from "../../contexts/ValueContext";

import Layout from "../../components/Layout/Layout";
import Button from "../../components/Buttons/Button/Button";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

export default function Code() {
  const {
    heightValue,
    widthValue,
    borderValue,
    radiusValue,
    shiftHorizontically,
    shiftVertically,
    opacityValue,
    blurValue,
    boxColor,
    shadowColor,
    borderColor,
    bgColor
  } = useContext(ValueContext);

  return (
    <div>
      <Layout>
        <div className={Styles.CodePage}>
          <div className={Styles.CodeContainer}>
            <pre className={Styles.code}>
              {`.Container
{ background-color: ${bgColor};
  .box
    { height: ${heightValue}rem;
      width: ${widthValue}rem;
      box-shadow: ${shiftHorizontically}rem ${shiftVertically}rem ${blurValue}rem ${hexToRgba(
                shadowColor,
                opacityValue
              )};
      border-radius: ${radiusValue}rem;
      background-color: ${boxColor};
      ${
        borderValue !== 0
          ? `border: ${borderValue}rem solid ${borderColor};`
          : ""
      }
    }
  }`}
            </pre>
          </div>
          <div className={Styles.BtnContainer}>
            <SecondaryButton text="Copy" />
            <Link to="/">
              <Button text="Go back" />
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
