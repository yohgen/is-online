import Email from './Email';
import Twitter from './Twitter';
import GitHub from './GitHub';
import BackArrow from './BackArrow';
import Sun from './Sun';
import Moon from './Moon';

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
    case 'sun':
      return <Sun />;
    case 'moon':
      return <Moon />;
    default:
      return '';
  }
};

const SVG = ({ type }) => {
  return <div className='svg-icon'>{switcheroo(type)}</div>;
};

export default SVG;
