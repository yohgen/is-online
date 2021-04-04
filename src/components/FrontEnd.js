import { useState } from 'react';
import OneBox from './OneBox';

const FrontEnd = () => {
  const [frontBoxes, setFrontBoxes] = useState([
    {
      logo: 'devicon-html5-plain',
      text: 'HTML',
      percent: '100%',
    },
    {
      logo: 'devicon-css3-plain',
      text: 'CSS',
      percent: '75%',
    },
    {
      logo: 'devicon-javascript-plain',
      text: 'JavaScript',
      percent: '100%',
    },
    {
      logo: 'devicon-react-original',
      text: 'React',
      percent: '50%',
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
