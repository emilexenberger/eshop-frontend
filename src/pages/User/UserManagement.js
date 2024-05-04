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
        const token = localStorage.getItem('token');
        const response = await UserService.getAllUsers(token);
        setUsers(response.appUserList);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
  };


  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      const token = localStorage.getItem('token');
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
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
            <th className="align-middle">ID</th>
            <th className="align-middle">Name</th>
            <th className="align-middle">Surname</th>
            <th className="align-middle ps-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="align-middle">{user.id}</td>
              <td className="align-middle">{user.name}</td>
              <td className="align-middle">{user.surname}</td>
              <td>
                <Link to={`/user/update/${user.id}`} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Update</Link>
                <button className="btn btn-danger btn-sm mb-1 mx-1" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;