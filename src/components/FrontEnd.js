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
      {frontBoxes.map(({ logo, text, percent }) => (
        <OneBox logo={logo} text={text} percent={percent} />
      ))}
    </div>
  );
};

export default FrontEnd;
