// src/components/SensitiveForm.js
import React, { useState } from 'react';
import axios from 'axios';

function SensitiveForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    id_number: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/submit/', formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Submission failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Sensitive Data</h2>
      <input name="full_name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="id_number" placeholder="ID Number" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default SensitiveForm;
