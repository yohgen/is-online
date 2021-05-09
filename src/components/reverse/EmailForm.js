import { useState } from 'react';
import axios from 'axios';
import BottomButtons from './BottomButtons';
import Modal from './Modal';

const textAreaPH =
  "Hey, it's me, Laozi.\n\nI'm writing to you to let you know that Dao that cannot be spoken is, in fact, eternal Dao!";

const encode = (data = {}) => {
  let result = Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

  return result;
};

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [modal, setModal] = useState({
    isShown: false,
    isSuccess: false,
    isLoading: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setModal({
      isShown: true,
      isSuccess: modal.isSuccess,
      isLoading: true,
    });

    axios
      .post(
        '/api/sendmail',
        encode({
          'form-name': 'email-form',
          email: email,
          msg: msg,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      )
      .then(({ data }) => {
        if (data.result === 'success') {
          console.log('[AXIOS POST]: Success');
          setModal({
            isShown: true,
            isSuccess: true,
            isLoading: false,
          });
          setTimeout(() => {
            setEmail('');
            setMsg('');
          }, 4000);
        } else {
          console.log('[AXIOS POST]: Failed on receiving');
          setModal({
            isShown: true,
            isSuccess: false,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log('[AXIOS POST]: Failed on sending');
        setModal({
          isShown: true,
          isSuccess: false,
          isLoading: false,
        });
      });
  };

  return (
    <div className='email-form'>
      {modal.isShown && <Modal setModal={setModal} modal={modal} />}
      <form name='email-form' method='POST' onSubmit={handleFormSubmit} netlify>
        <label htmlFor='email'>email (required)</label>
        <input
          id='email'
          type='email'
          placeholder='unspoken@dao.org'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor='msg'>message (required)</label>
        <textarea
          id='msg'
          spellCheck={false}
          rows='10'
          cols='40'
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          placeholder={textAreaPH}
          minLength='35'
          maxLength='420'
          required
        />
        <BottomButtons />
      </form>
    </div>
  );
};

export default EmailForm;
