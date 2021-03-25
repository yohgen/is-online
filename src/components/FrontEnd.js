import { useState } from 'react';
import OneBox from './OneBox';

const FrontEnd = () => {
  const [frontBoxes, setFrontBoxes] = useState([
    {
      logo: 'HT',
      text: 'HTML',
      percent: '100%',
    },
    {
      logo: 'CS',
      text: 'CSS',
      percent: '100%',
    },
    {
      logo: 'JS',
      text: 'JavaScript',
      percent: '100%',
    },
    {
      logo: 'RE',
      text: 'React',
      percent: '80%',
    },
  ]);

  return (
    <div className='front-end'>
      {frontBoxes.map((box) => (
        <OneBox logo={box.logo} text={box.text} percent={box.percent} />
      ))}
    </div>
  );
};

export default FrontEnd;
