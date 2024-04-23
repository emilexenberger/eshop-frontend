import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../../components/service/UserService';

function UserUpdate() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
  });

  useEffect(() => {
    fetchUserDataById(userId);
  }, [userId]);

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token);
      const { name, surname } = response.appUser;
      setUserData({ name, surname });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmUpdate = window.confirm('Are you sure you want to update this user?');
      if (confirmUpdate) {
        const token = localStorage.getItem('token');
        await UserService.updateUser(userId, userData, token);
        navigate("/user/management")
      }

    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error)
    }
  };

  return (
    <div className="col-md-4">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="form-control col-4" />
          <br />
        </div>

        <div className="form-group">
          <label>Surname:</label>
          <input type="text" name="surname" value={userData.surname} onChange={handleInputChange} className="form-control col-4" />
          <br />
        </div>

        <button type="submit" className="btn btn-primary btn-sm mb-1">Update</button>
      </form>
    </div>
  );
}

export default UserUpdate;