const OneBox = ({ logo, text, percent }) => {
  return (
    <div id={text} className='one-box'>
      <div className='percent'>{percent}</div>
      <div className='logo'>
        <i className={logo}></i>
      </div>
    </div>
  );
};

export default OneBox;
