import { useContext } from 'react';
import { StoreContext } from '../../utils/store';
import SVG from '../svg/SVG';

const BottomButtons = () => {
  const [isFlipped, setIsFlipped] = useContext(StoreContext).flipCard;

  return (
    <div className='bottom-buttons'>
      <button className='form-submit' type='submit'>
        <SVG type='email' />
        <span className='link'>submit</span>
      </button>
      <button className='form-back' type='button' onClick={() => setIsFlipped(!isFlipped)}>
        <SVG type='backArrow' />
        <span className='link'>go back</span>
      </button>
    </div>
  );
};

export default BottomButtons;
