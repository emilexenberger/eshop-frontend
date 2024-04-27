import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../components/service/UserService';

function UserCreate() {
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    setErrorMessages({});
  }, [formData, confirmPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    let hasError = false;

    if (!formData.username || formData.username.length < 3) {
        errors.username = 'Username must have at least 3 characters.';
        hasError = true;
    } else {
        const isUsernameAvailable = await UserService.isUsernameAvailable(formData.username); // Použitie await
        if (!isUsernameAvailable) { // Kontrola, či užívateľské meno už existuje
            console.log("Username already exists");
            errors.username = 'Username already exists.';
            hasError = true;
        }
    }

    if (!formData.name || formData.name.length < 3) {
        errors.name = 'Name must have at least 3 characters.';
        hasError = true;
    }

    if (!formData.surname || formData.surname.length < 3) {
        errors.surname = 'Surname must have at least 3 characters.';
        hasError = true;
    }

    if (!formData.password || formData.password.length < 3) {
        errors.password = 'Password must have at least 3 characters.';
        hasError = true;
    } else if (formData.password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match.';
        hasError = true;
    }

    setErrorMessages(errors);

    if (hasError) {
      return;
    }

    try {
      await UserService.register(formData);
      setFormData({
        username: '',
        name: '',
        surname: '',
        password: '',
      });
      setConfirmPassword('');
      alert('User registered successfully');
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div className="col-md-4">
      <h1>Create a new account</h1>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
        />
        {errorMessages.username && (
            <div className="text-danger">{errorMessages.username}</div>
        )}
        <br />

        <label>Name</label>
        <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            className="form-control"
        />
        {errorMessages.name && (
            <div className="text-danger">{errorMessages.name}</div>
        )}
        <br />

        <label>Surname</label>
        <input
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            type="text"
            className="form-control"
        />
        {errorMessages.surname && (
            <div className="text-danger">{errorMessages.surname}</div>
        )}
        <br />

        <label>Password</label>
        <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
        />
        {errorMessages.password && (
            <div className="text-danger">{errorMessages.password}</div>
        )}
        <br />

        <label>Confirm Password</label>
        <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
        />
        {errorMessages.confirmPassword && (
            <div className="text-danger">{errorMessages.confirmPassword}</div>
        )}
        <br />

        <button type="submit" className="btn btn-primary btn-sm">
            Create an account
        </button>
      </form>
    </div>
  );
}

export default UserCreate;
