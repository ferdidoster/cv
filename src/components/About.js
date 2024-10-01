import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); 
  const about = t('about.aboutData', { returnObjects: true });

  return (
    <section id='about-me'> 
      
      <h2>{t('titles.about')}</h2>
      {about.map((data, index) => (
        <div key={index} className="data">  
          <h3>{data.title}</h3>
          <p className='answer'>{data.answer}</p> 
        </div>
      ))}

    </section>
  );
};

export default About;