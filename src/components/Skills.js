import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => { 
  const { t } = useTranslation();  
  const skill = t('skills.skillset', { returnObjects: true });

  return (
    <section id='skill'>
      <h2>{t('titles.skills')}</h2> 

      <div className='skillsrow d-flex justify-content-end'>
        <div className='skillnames'>
          {skill.map((skillset, index) => (
            <div key={index} className="skillset d-flex">   
                <p className='m-0 p-0'>{skillset.title}</p>
            </div>
          ))} 
        </div>
        <div className='skillprogress w-100 d-flex align-items-center flex-column justify-content-around'> 
          
        {skill.map((skillset, index) => (
            <div key={index} className='w-100 emptybar'>
              <div className="progressbar" style={{ width: `${skillset.progress}%` }}></div>
            </div>
          ))} 
        </div> 
      </div>
    </section>
  );
};

export default Skills;