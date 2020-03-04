import React, { useContext, useState } from "react";
import Styles from "./Code.module.scss";

import { Link } from "react-router-dom";
import hexToRgba from "hex-to-rgba";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  const [copyValue, setCopyValue] = useState("");
  const [copied, setCopied] = useState(false);

  const changeCopied = () => {
    setCopied(true);
  };

  return (
    <div>
      <Layout>
        <div className={Styles.CodePage}>
          <div
            className={Styles.CodeContainer}
            id="code"
            onMouseLeave={e => setCopyValue(e.target.textContent)}
          >
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
            <CopyToClipboard text={copyValue} onCopy={changeCopied}>
              <span>
                <SecondaryButton text="Copy" />
              </span>
            </CopyToClipboard>

            <Link to="/">
              <Button text="Go back" />
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
