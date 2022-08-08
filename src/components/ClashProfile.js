import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";

const ClashProfile = () => {
  return (
    <div>
      <button
        className="button button--primary button--lg"
        onClick={() => {
          window.open('clash://install-config?url=https%3A%2F%2Fv.iloveu.top%2FYYDS_Clash.yml', "_blank");
        }}
      >
        <Translate>点此导入</Translate>
      </button>
      <br />
    </div>
  );
};

export default ClashProfile;
