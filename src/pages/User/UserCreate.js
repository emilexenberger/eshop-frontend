import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../components/service/UserService';

function UserCreate() {
    const navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        surname: '',
        password: ''
    });

        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService
            await UserService.register(formData);

            // Clear the form fields after successful registration
            setFormData({
                username: '',
                name: '',
                surname: '',
                password: '',
                role: ''
            });
            setConfirmPassword('')
            alert('User registered successfully');
            navigate('/');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <div className='col-md-4'>
            <h1>Create a new account</h1>

            <form onSubmit={handleSubmit}>
              {/* TODO: Pridaj kontroly: aby nebolo pole prazdne, aby sa confirmPassword zhodoval s password, ci uz dany username neexistuje, ci polia maju aspon 3 znaky. Pre vypisanie textu pod fieldami pouzi <p className="text-danger">Passwords do not match</p> */}
                <label>Username</label>
                <input name="username" value={formData.username} onChange={handleInputChange} type="text" className="form-control col-4" />
                <br />

                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="form-control col-4" />
                <br />

                <label>Surname</label>
                <input name="surname" value={formData.surname} onChange={handleInputChange} type="text" className="form-control col-4" />
                <br />

                <label>Password</label>
                <input name="password" value={formData.password} onChange={handleInputChange} type="password" className="form-control col-4" />
                <br />

                <label>Confirm Password</label>
                <input name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control col-4" />
                <br />

                <button type="submit" className="btn btn-primary btn-sm mb-1">Create an account</button>
            </form>

            <a href="/" alt="Home" className="btn btn-primary btn-sm mb-1">Home</a>
        </div>
    );
}

export default UserCreate;
