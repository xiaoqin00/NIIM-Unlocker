import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";

const ClashAPK = () => {
  return (
    <div>
      <button
        className="button button--primary button--lg"
        onClick={() => {
          window.open('https://ruye.lanzouy.com/i4Y3d07arywb', "_blank");
        }}
      >
        <Translate>点此下载</Translate>
      </button>
      <br />
    </div>
  );
};

export default ClashAPK;
