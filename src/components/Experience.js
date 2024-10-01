import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation(); 
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <section>
      <h2>{t('titles.exp')}</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <p className='job-date'>{job.startDate} - {job.endDate}</p> 
          <h3>{job.position}</h3>
          <p className='company'>{job.company}</p>
          <ul className='exp-list'>
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;