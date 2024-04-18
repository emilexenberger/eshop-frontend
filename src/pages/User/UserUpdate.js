import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import UserService from '../../components/service/UserService';

function UserUpdate() {
  const history = useHistory();
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
      const { name, surname } = response.ourUsers;
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
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res)
        history.push("/user/management")
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
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} clasName="form-control col-4" />
        </div>

        <div className="form-group">
          <label>Surname:</label>
          <input type="email" name="email" value={userData.surname} onChange={handleInputChange} clasName="form-control col-4" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm mb-1">Update</button>
      </form>
    </div>
  );
}

export default UserUpdate;