import axios from 'axios';
import { useState, useEffect } from 'react';

const Salute = () => {
  const [auteur, setAuteur] = useState('undefined');

  useEffect(() => {
    axios
      .get('/api/user?info=1')
      .then(({ data: { fullName } }) => setAuteur(fullName.toLowerCase()))
      .catch((err) => console.log(err));
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
