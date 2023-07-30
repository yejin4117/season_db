import React, { useState, useEffect } from 'react';
import './pages.css';
import axios from 'axios';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log('click login');
  };

  useEffect(() => {
    axios.get('/api/data')
      .then(res => console.log(res.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="login-name">
      <h2>Login</h2>
      <div className="id-name">
        <input type='text' name='input_id' value={inputId} placeholder="ID" onChange={handleInputId} />
      </div>
      <div className="pw-name">
        <input type='password' name='input_pw' value={inputPw} placeholder="PASSWORD" onChange={handleInputPw} />
      </div>
      <div className="login-button">
        <button type='submit' onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;