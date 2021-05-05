import axios from 'axios';
import { useState, useEffect } from 'react';

const Salute = () => {
  const [auteur, setAuteur] = useState('john doe');

  useEffect(() => {
    axios
      .get('/api/user?info=1')
      .then(({ data }) => {
        if (typeof data.name === 'string') {
          setAuteur(data.name.toLowerCase());
        } else {
          console.log('[AXIOS GET] Wrong data type: ' + typeof data.name);
        }
      })
      .catch((err) => console.log('[AXIOS GET]', err));
  }, []);

  return (
    <div className='salute'>
      <h1>
        hi, it's <span id='auteur'>{auteur}</span>
      </h1>
    </div>
  );
};

export default Salute;
