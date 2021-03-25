import { useState } from 'react';
import MoonMan from './MoonMan';
import Salute from './Salute';

const Header = () => {
  const [moonSide, setMoonSide] = useState('🌝');
  const [moonGlow, setMoonGlow] = useState({ boxShadow: '10px, 10px, 5px, #ffffcc' });

  const onMoonClick = (moonSide) => {
    if (moonSide === '🌚') {
      setMoonSide('🌝');
      setMoonGlow({ boxShadow: '10px, 10px, 5px, 5px, #ffffcc' });
    } else {
      setMoonSide('🌚');
      setMoonGlow({ boxShadow: '10px, 10px, 5px, 5px, #fff' });
    }
  };

  return (
    <div className='header'>
      <Salute />
      <MoonMan
        onClick={() => {
          onMoonClick(moonSide);
        }}
        moonSide={moonSide}
        moonGlow={moonGlow}
      />
    </div>
  );
};

export default Header;
