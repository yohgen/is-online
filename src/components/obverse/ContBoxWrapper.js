import { useContext } from 'react';
import { StoreContext } from '../../utils/store';
import SVG from '../svg/SVG';

const ContBoxWrapper = ({ type, provider, link }) => {
  const [isFlipped, setIsFlipped] = useContext(StoreContext).flipCard;

  if (type === 'email') {
    return (
      <button
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <SVG type={provider} />
        <span className='link'>email me</span>
      </button>
    );
  } else {
    return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <SVG type={provider} />
        <span className='link'>{provider.toLowerCase()}</span>
      </a>
    );
  }
};

export default ContBoxWrapper;
