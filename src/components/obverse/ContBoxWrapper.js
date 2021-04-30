import { useContext } from 'react';
import { StoreContext } from '../../utils/store';
import SVG from '../svg/SVG';

const ContBoxWrapper = ({ type, text, link }) => {
  const [isFlipped, setIsFlipped] = useContext(StoreContext).flipCard;

  if (type === 'email') {
    return (
      <button
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <SVG type={type} />
        <span className='link'>email me</span>
      </button>
    );
  } else {
    return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <SVG type={type} />
        <span className='link'>{text}</span>
      </a>
    );
  }
};

export default ContBoxWrapper;
