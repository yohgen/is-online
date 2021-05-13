import OneBox from './OneBox';

const OneEnd = ({ isFrontEnd, tech }) => {
  return (
    <div className={isFrontEnd ? 'front-end' : 'back-end'}>
      {tech &&
        tech.map(({ name, backSide, devicon, deviconClass, link, text }, i) => {
          return (
            <OneBox
              key={(Math.random() * 100).toFixed(0) + i}
              id={name || text}
              logo={devicon ? deviconClass : link}
              text={backSide || text}
            />
          );
        })}
    </div>
  );
};

export default OneEnd;
