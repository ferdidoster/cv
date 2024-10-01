import React from 'react';
import { useTranslation } from 'react-i18next';
 
const Education = () => {
  const { t } = useTranslation(); 
  const education = t('education.educator', { returnObjects: true })
  
  console.log(education)
  return (
    <section id='education'>
      <h2>{t('titles.education')}</h2> 

      {education.map((edu, index) => (
        <div key={index} className="data">
          <p className='time'>{edu.when}</p> 
          <h3>{edu.title}</h3> 
          <p className='answer'>{edu.where}</p> 
        </div>
      ))}

    </section>
  );
};

export default Education;
