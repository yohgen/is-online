import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import SVG from '../svg/SVG';

const LIGHT_CLASS = 'light';

const MoonMan = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove(LIGHT_CLASS);
    } else {
      document.documentElement.classList.add(LIGHT_CLASS);
    }
  }, [isDark]);

  const onClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className='moon-man'>
      <button onClick={onClick}>
        <SVG type={isDark ? 'sun' : 'moon'} />
      </button>
    </div>
  );
};

export default MoonMan;
