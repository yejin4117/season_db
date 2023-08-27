import React, { useState } from 'react';
import './pages.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DB_CONFIG from '../root/dbConfig';

function Signup() {
  const [ID, setID] = useState('');
  const [PASSWORD, setPASSWORD] = useState('');
  const [NAME, setNAME] = useState('');
  const [BIRTHDAY, setBIRTHDAY] = useState(new Date());
  const [message, setMessage] = useState('');

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handlePASSWORD = (e) => {
    setPASSWORD(e.target.value);
  };

  const handleNAME = (e) => {
    setNAME(e.target.value);
  };

  const handleBIRTHDAY = (date) => {
    setBIRTHDAY(date);
  };

  const onClickSignup = async () => {
    console.log('Sending signup request:');
    console.log('ID:', ID);
    console.log('PASSWORD:', PASSWORD);
    console.log('NAME:', NAME);
    console.log('BIRTHDAY:', BIRTHDAY);

    try {
      const response = await axios.post(
        '/api/signup',
        {
          ID,
          PASSWORD,
          NAME,
          BIRTHDAY: BIRTHDAY.toISOString().slice(0, 10),
        },
        {
          baseURL: `http://${DB_CONFIG.connectString}`,
          withCredentials: true, // Send cookies with the request
        }
      );

      console.log('Signup Response:', response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('회원가입 실패');
    }
  };
  

  return (
    <div className="login-name">
      <h2>Sign up</h2>
      <div className="input-container">
        <br/>
        {/* <label htmlFor="input_id">ID</label> */}
        <input
          type="text"
          id="input_id"
          name="input_id"
          value={ID}
          placeholder="ID"
          onChange={handleID}
        />
      </div>
      <br/>
      <div className="input-container">
        {/* <label htmlFor="input_pw">PASSWORD</label> */}
        <input
          type="password"
          id="input_pw"
          name="input_pw"
          value={PASSWORD}
          placeholder="PASSWORD"
          onChange={handlePASSWORD}
        />
      </div>
      <br/>
      <div className="input-container">
        {/* <label htmlFor="input_nm">Name</label> */}
        <input
          type="text"
          id="input_nm"
          name="input_nm"
          value={NAME}
          placeholder="NAME"
          onChange={handleNAME}
        />
      </div>
      <div className="input-container">
        <label htmlFor="input_bd">Birthday</label>
        <DatePicker
          id="input_bd"
          selected={BIRTHDAY}
          onChange={handleBIRTHDAY}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select Birthday"
        />
      </div>
      <div className="login-button">
        <button type="button" onClick={onClickSignup}>
          Sign up
        </button>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Signup;
