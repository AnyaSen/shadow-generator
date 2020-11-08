import React, { useContext, useState, useRef, useEffect } from "react";
import Styles from "./CodePage.module.scss";

import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Button from "../../components/Buttons/Button/Button";
import CopyCodeToClipboard from "./CopyCodeToClipboard/CopyCodeToClipboard";
import CodeTemplate from "./CodeTemplate/CodeTemplate";

import { BoxPropertyContext } from "../../contexts/BoxPropertyContext";
import { ColorPropertyContext } from "../../contexts/ColorPropertyContext";
import { ShadowPropertyContext } from "../../contexts/ShadowPropertyContext";

export default function CodePage() {
  const { heightValue, widthValue, borderValue, radiusValue } = useContext(
    BoxPropertyContext
  );

  const {
    shiftHorizontically,
    shiftVertically,
    opacityValue,
    blurValue
  } = useContext(ShadowPropertyContext);

  const { boxColor, shadowColor, borderColor, bgColor } = useContext(
    ColorPropertyContext
  );

  const [copyValue, setCopyValue] = useState("");
  const [copied, setCopied] = useState(false);

  const codeElement = useRef(null);

  useEffect(() => {
    setCopyValue(codeElement.current.textContent);
  }, []);

  const changeCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleClickCopy = () => {
    setCopyValue(codeElement.current.textContent);
  };

  return (
    <Layout codePage>
      <div className={Styles.CodePage} data-testid="codePage">
        <div className={Styles.CodeContainer} ref={codeElement}>
          <CodeTemplate
            heightValue={heightValue}
            widthValue={widthValue}
            borderValue={borderValue}
            radiusValue={radiusValue}
            boxColor={boxColor}
            shadowColor={shadowColor}
            borderColor={borderColor}
            bgColor={bgColor}
            shiftHorizontically={shiftHorizontically}
            shiftVertically={shiftVertically}
            opacityValue={opacityValue}
            blurValue={blurValue}
          />
        </div>

        <div className={Styles.BtnContainer}>
          <CopyCodeToClipboard
            copyValue={copyValue}
            changeCopied={changeCopied}
            onClick={handleClickCopy}
          />

          <Link to="/">
            <Button text="Go back" />
          </Link>
        </div>

        {copied ? <h2>Copied!</h2> : null}
      </div>
    </Layout>
  );
}
