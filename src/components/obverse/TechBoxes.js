import { useState, useEffect } from 'react';
import axios from 'axios';
import OneEnd from './OneEnd';

const TechBoxes = () => {
  const [feTech, setFETech] = useState([{ text: 'nothing' }, { text: 'but' }]);
  const [beTech, setBETech] = useState([{ text: 'chickens' }, { text: 'here' }]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/users/1/tech')
      .then(({ data }) => {
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='tech-boxes'>
      <OneEnd isFrontEnd={true} tech={feTech} />
      <OneEnd isFrontEnd={false} tech={beTech} />
    </div>
  );
};

export default TechBoxes;
