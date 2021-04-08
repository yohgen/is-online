import { useState } from 'react';
import OneBox from './OneBox';

const BackEnd = () => {
  const [backBoxes, setBackBoxes] = useState([
    {
      logo: 'devicon-nodejs-plain',
      id: 1,
      percent: '100%',
    },
    {
      logo: 'devicon-express-original',
      id: 2,
      percent: '100%',
    },
    {
      logo: 'devicon-mongodb-plain',
      id: 3,
      percent: '50%',
    },
    {
      logo: 'devicon-postgresql-plain',
      id: 4,
      percent: '75%',
    },
    {
      logo: 'devicon-typescript-plain',
      id: 5,
      percent: '50%',
    },
  ]);

  const genKey = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [minId, maxId] = [0, 10000];

  return (
    <div className='back-end'>
      {backBoxes.map(({ logo, id, percent }) => (
        <OneBox key={() => genKey(minId, maxId)} logo={logo} id={id} percent={percent} />
      ))}
    </div>
  );
};

export default BackEnd;
