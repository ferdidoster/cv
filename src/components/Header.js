import React from 'react'; 
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation(); // Hook to translate text

  return (
    <header>
      <h1>{t('header.title')}</h1> 
      <p className='fw-bold profile-p'>{t('header.subtitle')}</p>  
      <img src={`${process.env.PUBLIC_URL}/me.png`} alt="Profile" className="profile-pic" /> 
    </header>
  );
};

export default Header; 