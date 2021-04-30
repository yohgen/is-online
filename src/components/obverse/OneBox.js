const OneBox = ({ logo, id, text }) => {
  return (
    <div id={id} className='one-box'>
      <div className='text'>{Number.isInteger(text) ? text + '%' : text}</div>
      <div className='logo'>{logo && <i className={logo}></i>}</div>
    </div>
  );
};

export default OneBox;
