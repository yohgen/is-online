import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const LIGHT_CLASS = 'light';

const MoonMan = ({ onClick, moonSide, moonGlow }) => {
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

  return (
    <Toggle
      checked={isDark}
      onChange={(event) => setIsDark(event.target.checked)}
      className='moonMan'
      icons={{ checked: '🌚', unchecked: '🌝' }}
      aria-label='Light'
    />
  );
};

export default MoonMan;
