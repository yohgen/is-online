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
      .then(({ data: { contacts } }) => {
        if (Array.isArray(contacts)) {
          setContacts(contacts);
        } else {
          console.log('[AXIOS GET] Wrong data type: ' + typeof contacts);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='cont-boxes'>
      {contacts && contacts.map((cont) => <ContBox key={cont.provider} {...cont} />)}
    </div>
  );
};

export default ContBoxes;
