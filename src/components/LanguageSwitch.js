import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('de'); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="de">German</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
