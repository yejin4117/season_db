import React, { useState } from 'react';
import './pages.css';
import axios from 'axios';

function Login() {
  const [ID, setID] = useState('');
  const [PASSWORD, setPASSWORD] = useState('');
  const [message, setMessage] = useState('');

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handlePASSWORD = (e) => {
    setPASSWORD(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .get(`/api/login?ID=${ID}&PASSWORD=${PASSWORD}`)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setMessage('로그인 실패');
      });
  };

  return (
    <div className="login-name">
      <h2>Login</h2>
      <div className="id-name">
        <input
          type="text"
          name="input_id"
          value={ID}
          placeholder="ID"
          onChange={handleID}
        />
      </div>
      <div className="pw-name">
        <input
          type="password"
          name="input_pw"
          value={PASSWORD}
          placeholder="PASSWORD"
          onChange={handlePASSWORD}
        />
      </div>
      <div className="login-button">
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
