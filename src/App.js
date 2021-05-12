import { useContext } from 'react';
import { StoreContext } from './utils/store';
import Obverse from './components/Obverse';
import Reverse from './components/Reverse';
import Footer from './components/Footer';
import ReactCardFlip from 'react-card-flip';

function App() {
  const [isFlipped] = useContext(StoreContext).flipCard;

  return (
    <div className='full-page'>
      <div className='content'>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection='horizontal'
          flipSpeedBackToFront='0.4'
          flipSpeedFrontToBack='0.4'
        >
          <Obverse />
          <Reverse />
        </ReactCardFlip>
      </div>
      <Footer />
    </div>
  );
}

export default App;
