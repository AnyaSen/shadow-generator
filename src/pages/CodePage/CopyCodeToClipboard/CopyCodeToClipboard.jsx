import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import SecondaryButton from "../../../components/Buttons/SecondaryButton/SecondaryButton";

export default function CopyCodeToClipboard({
  copyValue,
  changeCopied,
  onClick
}) {
  return (
    <CopyToClipboard text={copyValue} onCopy={changeCopied}>
      <span onClick={onClick}>
        <SecondaryButton text="Copy" />
      </span>
    </CopyToClipboard>
  );
}
