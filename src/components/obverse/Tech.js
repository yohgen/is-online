import Heading from './Heading';
import TechBoxes from './TechBoxes';

const Tech = () => {
  return (
    <div className='tech'>
      <Heading text='my trades:' identifier='craft' />
      <TechBoxes />
    </div>
  );
};

export default Tech;
