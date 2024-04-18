import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UserService from '../../components/service/UserService';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const history = useHistory();

    useEffect(() => {
        document.title = "Login"
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const userData = await UserService.login(username, password)
            console.log(userData)
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                history.push('/')
            }else{
                setError(userData.message)
            }
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    }
    
    return (
        <div className='col-md-3'>
            <h1>Log in</h1>
            {error && <p className="error-message">{error}</p>}

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

                <button className="btn btn-primary btn-sm mb-1 mx-1" type='submit'>Log in</button>
            </form>

            <Link to="/" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Home</Link>
        </div>
    )
}

export default UserLogin;