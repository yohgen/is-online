import { useState } from 'react';
import ContBox from './ContBox';

const ContBoxes = () => {
  const [contacts, setContacts] = useState([
    {
      type: 'email',
      text: 'jorgentau@gmail.com',
      link: 'mailto:jorgentau@gmail.com',
    },
    {
      type: 'github',
      text: 'github',
      link: 'https://github.com/yohgen',
    },
    {
      type: 'twitter',
      text: 'twitter',
      link: 'https://twitter.com/enshightenment',
    },
  ]);

  return (
    <div className='cont-boxes'>
      {contacts.map((cont) => (
        <ContBox {...cont} />
      ))}
    </div>
  );
};

export default ContBoxes;
