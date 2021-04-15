import { useState } from 'react';
import ContBox from './ContBox';

const ContBoxes = () => {
  const [ contacts, setContacts ] = useState([
    {
      type: 'email',
      text: 'jorgentau@gmail.com',
      link: 'mailto:jorgentau@gmail.com',
    },
    {
      type: 'github',
      text: '@yohgen',
      link: 'https://github.com/yohgen',
    },
    {
      type: 'twitter',
      text: '@enshightenment',
      link: 'https://twitter.com/enshightenment',
    },
  ])

  return (
    <div className='cont-boxes'>
      {contacts.map(({ type, text, link }) => ( 
        <ContBox type={type} text={text} link={link} /> 
      ))}
    </div>
  )
}

export default ContBoxes;