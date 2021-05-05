import { useState, useEffect } from 'react';
import axios from 'axios';
import OneEnd from './OneEnd';

const TechBoxes = () => {
  const [feTech, setFETech] = useState([{ text: 'nothing' }, { text: 'but' }]);
  const [beTech, setBETech] = useState([{ text: 'chickens' }, { text: 'here' }]);

  useEffect(() => {
    axios
      .get('/api/user?tech=1')
      .then(({ data }) => {
        if (Array.isArray(data)) {
          const frontEnd = data.filter((ele) => ele.front_end && ele.percent > 0);
          const backEnd = data.filter((ele) => !ele.front_end && ele.percent > 0);

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
          console.log('[AXIOS GET] Wrong data type: ' + typeof data.name);
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
