import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../components/service/UserService';
import { useAuthContext } from '../../hooks/useContext/AuthContext';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthContext();

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UserService.login(username, password);
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        login();
        navigate('/');
      } else {
        setError("Wrong username or password");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className='col-md-3'>
      <h1>Log in</h1>
      {error && <p className="text-danger">{error}</p>}

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

        <button className="btn btn-primary btn-sm mb-1 mx-1" type='submit'>
          Log in
        </button>
      </form>

      <Link to="/" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Home</Link>
    </div>
  );
};

export default UserLogin;
