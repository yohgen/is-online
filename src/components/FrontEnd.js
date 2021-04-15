import { useState } from 'react';
import OneBox from './OneBox';

const FrontEnd = () => {
  const [frontBoxes, setFrontBoxes] = useState([
    {
      logo: 'devicon-html5-plain',
      id: 1,
      percent: '100%',
    },
    {
      logo: 'devicon-css3-plain',
      id: 2,
      percent: '75%',
    },
    {
      logo: 'devicon-javascript-plain',
      id: 3,
      percent: '100%',
    },
    {
      logo: 'devicon-react-original',
      id: 4,
      percent: '50%',
    },
    {
      logo: 'devicon-redux-original',
      id: 5,
      percent: '0%',
    },
    {
      logo: 'devicon-webpack-plain',
      id: 6,
      percent: '25%',
    },
  ]);

  return (
    <div className='front-end'>
      {frontBoxes.map(({ logo, id, percent }) => (
        <OneBox logo={logo} id={id} percent={percent} />
      ))}
    </div>
  );
};

export default FrontEnd;
