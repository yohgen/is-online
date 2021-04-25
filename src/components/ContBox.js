import SVG from './svg/SVG';

const decideWrapper = (type, text, link) => {
  if (type === 'email') {
    return (
      <button>
        <SVG type={type} />
        <p className='link'>email me</p>
      </button>
    );

  } else {
    return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <SVG type={type} />
        <p className='link'>{text}</p>
      </a>
    );
  }
};

const ContBox = ({ type, text, link }) => {
  return (
    <div className='cont-box' id={type}>
      {decideWrapper(type, text, link)}
    </div>
  )
}

export default ContBox;
