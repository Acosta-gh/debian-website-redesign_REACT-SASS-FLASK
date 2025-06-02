import React, { useState } from 'react';
import { login } from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
            .then(response => {
                console.log('Login successful:', response);
                navigate('/adminpanel');
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    return (
        <div className="login" >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="username">Username</label><br></br>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                
                <div >
                    <label htmlFor="password">Password</label><br></br>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" >Enter</button>
            </form>
        </div>
    );
}

export default Login;