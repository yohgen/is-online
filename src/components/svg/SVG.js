import Email from './Email';
import Twitter from './Twitter';
import GitHub from './GitHub';
import BackArrow from './BackArrow';

const switcheroo = (type) => {
  switch (type) {
    case 'email':
      return <Email />;
    case 'twitter':
      return <Twitter />;
    case 'github':
      return <GitHub />;
    case 'backArrow':
      return <BackArrow />;
    default:
      return '';
  }
};

const SVG = ({ type }) => {
  return <div className='svg-icon'>{switcheroo(type)}</div>;
};

export default SVG;
