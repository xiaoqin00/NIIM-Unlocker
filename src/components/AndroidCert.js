import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";

const AndroidCert = () => {
  return (
    <div>
      <button
        className="button button--primary button--lg"
        onClick={() => {
          window.open('https://v.iloveu.top/FiddlerRoot.cer', "_blank");
        }}
      >
        <Translate>点此安装</Translate>
      </button>
      <br />
    </div>
  );
};

export default AndroidCert;
