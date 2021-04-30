import { useState } from 'react';
import BottomButtons from './BottomButtons';

const textAreaPH =
  "Hey, it's me, Laozi.\n\nI'm writing to you to let you know that Dao that cannot be spoken is, in fact, eternal Dao!";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='email-form'>
      <form onSubmit={handleFormSubmit}>
        <label for='email'>email (required)</label>
        <input
          id='email'
          type='email'
          placeholder='unspoken@dao.org'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label for='msg'>message (required)</label>
        <textarea
          id='msg'
          spellCheck={false}
          rows='10'
          cols='40'
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          placeholder={textAreaPH}
          minLength='70'
          maxLength='420'
          required
        />
        <BottomButtons />
      </form>
    </div>
  );
};

export default EmailForm;
