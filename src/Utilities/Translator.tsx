import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Translator.scss";

const Trasnlator = () => {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(true);

  const changeLanguage = () => {
    setCurrentLanguage(!currentLanguage);
    i18n.changeLanguage(currentLanguage ? "pl" : "en");
  };

  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onClick={() => changeLanguage()} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Trasnlator;
