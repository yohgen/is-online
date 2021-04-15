const OneBox = ({ logo, id, percent }) => {
  return (
    <div id={id} className='one-box'>
      <div className='percent'>{percent}</div>
      <div className='logo'>
        <i className={logo}></i>
      </div>
    </div>
  );
};

export default OneBox;
