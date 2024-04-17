import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        document.title = "Login"
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { username, password };
        console.log(credentials);
    
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        }).then(() => {
            history.push('/');
        })
    }
    
    return (
        <div className='col-md-3'>
            <h1>Log in</h1>

            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input 
                    type="text" 
                    required 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control mb-1"
                />

                <label>Password:</label>
                <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-3"
                />

                <button className="btn btn-primary btn-sm mb-1 mx-1">Log in</button>
            </form>

            <Link to="/" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Home</Link>
        </div>
    )
}

export default UserLogin