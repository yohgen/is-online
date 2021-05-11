import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [ isWideEnough, setIsWideEnough ] = useState(true);

  useMediaQuery(
    { query: 'screen and (max-width: 350px)' },
    undefined,
    (isWide) => { setIsWideEnough(!isWide) }
  )

  return (
    <div className='header'>
      <h1>{isWideEnough ? 'send me an email' : 'send email'}</h1>
    </div>
  );
};

export default Header;
