import OneBox from './OneBox';

const OneEnd = ({ isFrontEnd, tech }) => {
  return (
    <div className={isFrontEnd ? 'front-end' : 'back-end'}>
      {tech.map(({ name, percent, devicon, devicon_class, link, text }, i) => {
        return (
          <OneBox
            key={(Math.random() * 100).toFixed(0) + i}
            id={name || text}
            logo={devicon ? devicon_class : link}
            text={percent || text}
          />
        );
      })}
    </div>
  );
};

export default OneEnd;
