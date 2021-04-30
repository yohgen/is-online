import { useContext } from 'react';
import { StoreContext } from './utils/store';
import Obverse from './components/Obverse';
import Reverse from './components/Reverse';
import ReactCardFlip from 'react-card-flip';

function App() {
  const [isFlipped, setIsFlipped] = useContext(StoreContext).flipCard;

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection='horizontal'
      flipSpeedBackToFront='0.4'
      flipSpeedFrontToBack='0.4'
    >
      <Obverse />
      <Reverse />
    </ReactCardFlip>
  );
}

export default App;
