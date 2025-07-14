import React, {useState} from "react";
import axios from 'axios';

function Register(){
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleRegister = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/register/' , {
        username,
        password
      });
      setMessage(res.data.message);
    }catch (err){
      setMessage(err.response?.data?.error || 'Registration failed');
    }
    };

    return (
    <div className="form-container">
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;