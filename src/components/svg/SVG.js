import Email from './Email';
import Twitter from './Twitter';
import GitHub from './GitHub';

const switcheroo = (type) => {
  switch (type) {
    case 'email': return <Email />
    case 'twitter': return <Twitter />
    case 'github': return <GitHub />
    default: return '';
  }
}

const SVG = ({ type }) => {
  return (
    <div class='svg-icon'>
      {switcheroo(type)}
    </div>
  );
};

export default SVG;