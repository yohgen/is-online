const MoonMan = ({ onClick, moonSide, moonGlow }) => {
  return (
    <div className='moon-man'>
      <button onClick={onClick} style={moonGlow}>
        {moonSide}
      </button>
    </div>
  );
};

export default MoonMan;
