const Heading = ({ text, identifier }) => {
  return (
    <div className={identifier}>
      <h3>{text}</h3>
    </div>
  );
};

export default Heading;
