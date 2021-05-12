import axios from 'axios';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Salute = () => {
  const [auteur, setAuteur] = useState('john doe');
  const [sayHello, setSayHello] = useState(true);

  useMediaQuery({ query: 'screen and (max-width: 450px)' }, undefined, (isWide) => {
    setSayHello(!isWide);
  });

  useEffect(() => {
    axios
      .get('/api/user?info=1')
      .then(({ data }) => {
        if (typeof data.fullName === 'string') {
          setAuteur(data.fullName.toLowerCase());
        } else {
          console.log('[AXIOS GET] Wrong data type: ' + typeof data.fullName);
        }
      })
      .catch((err) => console.log('[AXIOS GET]', err));
  }, []);

  return (
    <div className='salute'>
      <h1>
        {sayHello && "hi, it's "}
        <span id='auteur'>{auteur}</span>
      </h1>
    </div>
  );
};

export default Salute;
