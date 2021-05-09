import SVG from '../svg/SVG';

const Modal = ({ modal, setModal }) => {
  if (modal.isLoading) {
    return (
      <div className='modal-bg'>
        <div className='modal-fg'>
          <div className='modal-header'>
            <SVG type='loader' />
            <p>sending...</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='modal-bg'>
        <div className='modal-fg'>
          <div className='modal-header'>
            <SVG type={modal.isSuccess ? 'check' : 'uncheck'} />
            <p>{modal.isSuccess ? 'message sent' : 'error occured'}</p>
          </div>
          <button onClick={() => setModal({ isShown: false, isSuccess: modal.isSuccess })}>
            close
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
