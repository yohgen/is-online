import { useState, useEffect } from 'react';
import axios from 'axios';
import ContBox from './ContBox';

const ContBoxes = () => {
  const [contacts, setContacts] = useState([
    {
      type: 'RickRoll',
      provider: 'YouTube',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ]);

  useEffect(() => {
    axios
      .get('/api/user?contacts=1')
      .then(({ data }) => setContacts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='cont-boxes'>
      {contacts.map((cont) => (
        <ContBox {...cont} />
      ))}
    </div>
  );
};

export default ContBoxes;
