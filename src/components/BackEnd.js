import { useState } from 'react';
import OneBox from './OneBox';

const BackEnd = () => {
  const [backBoxes, setBackBoxes] = useState([
    {
      logo: 'NJ',
      text: 'Node.js',
      percent: '100',
    },
    {
      logo: 'EX',
      text: 'Express',
      percent: '100',
    },
    {
      logo: 'MG',
      text: 'MongoDB',
      percent: '50',
    },
    {
      logo: 'PS',
      text: 'PostgreSQL',
      percent: '80',
    },
  ]);

  return (
    <div className='back-end'>
      {backBoxes.map(({ logo, text, percent }) => (
        <OneBox logo={logo} text={text} percent={percent} />
      ))}
    </div>
  );
};

export default BackEnd;
