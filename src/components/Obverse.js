import Header from './obverse/Header';
import Bio from './obverse/Bio';
import Tech from './obverse/Tech';
import Contacts from './obverse/Contacts';

const Obverse = () => {
  return (
    <div className='obverse card'>
      <Header />
      <Bio />
      <Tech />
      <Contacts />
    </div>
  );
};

export default Obverse;
