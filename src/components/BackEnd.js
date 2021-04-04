import { useState } from 'react';
import OneBox from './OneBox';

const BackEnd = () => {
  const [backBoxes, setBackBoxes] = useState([
    {
      logo: 'devicon-nodejs-plain',
      text: 'Node.js',
      percent: '100%',
    },
    {
      logo: 'devicon-express-original',
      text: 'Express',
      percent: '100%',
    },
    {
      logo: 'devicon-mongodb-plain',
      text: 'MongoDB',
      percent: '50%',
    },
    {
      logo: 'devicon-postgresql-plain',
      text: 'PostgreSQL',
      percent: '75%',
    },
  ]);

  const genKey = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [minId, maxId] = [0, 10000];

  return (
    <div className='back-end'>
      {backBoxes.map(({ logo, text, percent }) => (
        <OneBox key={() => genKey(minId, maxId)} logo={logo} text={text} percent={percent} />
      ))}
    </div>
  );
};

export default BackEnd;
