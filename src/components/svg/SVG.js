import { Mail, Twitter, GitHub, Linkedin, FileText, ArrowLeftCircle, Sun, Moon, Loader, X, Check } from 'react-feather';

const switcheroo = (type) => {
  type = type.replace(/[^\S\r\n]\w+/, '');
  switch (type) {
    case 'Gmail':
      return <Mail />;
    case 'Twitter':
      return <Twitter />;
    case 'GitHub':
      return <GitHub />;
    case 'backArrow':
      return <ArrowLeftCircle />;
    case 'sun':
      return <Sun />;
    case 'moon':
      return <Moon />;
    case 'check':
      return <Check />;
    case 'uncheck':
      return <X />;
    case 'loader':
      return <Loader />;
    case 'LinkedIn':
      return <Linkedin />;
    case 'CV/EN':
      return <FileText />;
    case 'CV/RU':
      return <FileText />;
    default:
      return '';
  }
};

const SVG = ({ type }) => {
  return <div className='svg-icon'>{switcheroo(type)}</div>;
};

export default SVG;
