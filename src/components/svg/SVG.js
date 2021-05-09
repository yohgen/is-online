import Email from './Email';
import Twitter from './Twitter';
import GitHub from './GitHub';
import BackArrow from './BackArrow';
import Sun from './Sun';
import Moon from './Moon';
import Check from './Check';
import Uncheck from './Uncheck';
import Loader from './Loader';

const switcheroo = (type) => {
  switch (type) {
    case 'Gmail':
      return <Email />;
    case 'Twitter':
      return <Twitter />;
    case 'GitHub':
      return <GitHub />;
    case 'backArrow':
      return <BackArrow />;
    case 'sun':
      return <Sun />;
    case 'moon':
      return <Moon />;
    case 'check':
      return <Check />;
    case 'uncheck':
      return <Uncheck />;
    case 'loader':
      return <Loader />;
    default:
      return '';
  }
};

const SVG = ({ type }) => {
  return <div className='svg-icon'>{switcheroo(type)}</div>;
};

export default SVG;
