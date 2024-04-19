// components/UserManagementPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../components/service/UserService';

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await UserService.getAllUsers(token);
        setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
        console.error('Error fetching users:', error);
    }
  };


  const deleteUser = async (userId) => {
    try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        // After deleting the user, fetch the updated list of users
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='col-md-6'>
      <h2>Users Management Page</h2>
      <Link to="/user/create" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Add User</Link>
      <table className="table col-3 table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>
                <button className="btn btn-primary btn-sm mb-1 mx-1" onClick={() => deleteUser(user.id)}>Delete</button>
                <Link to={`/user/update/${user.id}`} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;