import { useState, useEffect } from 'react';
import axios from 'axios';
import OneEnd from './OneEnd';

const TechBoxes = () => {
  const [feTech, setFETech] = useState([{ text: 'nothing' }, { text: 'but' }]);
  const [beTech, setBETech] = useState([{ text: 'chickens' }, { text: 'here' }]);

  useEffect(() => {
    axios
      .get('/api/user?tech=1')
      .then(({ data: { tech } }) => {
        if (Array.isArray(tech)) {
          const frontEnd = tech.filter((ele) => ele.frontEnd && ele.backSide !== '👎');
          const backEnd = tech.filter((ele) => !ele.frontEnd && ele.backSide !== '👎');

          if (feTech.length % 2 !== 0) {
            setFETech([...frontEnd, { text: 'etc.' }]);
          } else {
            setFETech(frontEnd);
          }

          if (beTech.length % 2 !== 0) {
            setBETech([...backEnd, { text: 'etc.' }]);
          } else {
            setBETech(backEnd);
          }
        } else {
          console.log('[AXIOS GET] Wrong data type: ' + typeof tech);
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className='tech-boxes'>
      <OneEnd isFrontEnd={true} tech={feTech} />
      <OneEnd isFrontEnd={false} tech={beTech} />
    </div>
  );
};

export default TechBoxes;
