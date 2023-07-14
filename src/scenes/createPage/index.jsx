import React, { useState } from 'react';
import './inde.css';
import { useDispatch } from 'react-redux';
import { setLogout } from 'state';
import { Link } from 'react-router-dom';

const CreatePage = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="my-app">
        <h1> Generate Your Tv Commercial Script </h1>
        <form onSubmit={handleSubmit}>
          <textarea value={message} onChange={handleMessageChange} />
          <button type="submit">Send Message</button>
        </form>
        <div className="response-container">
          {response && <pre className="response">{response}</pre>}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
