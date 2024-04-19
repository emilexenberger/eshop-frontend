import React, { useEffect, useState } from 'react'
import UserService from '../../components/service/UserService';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
      fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
      try {
          const token = localStorage.getItem('token');
          const response = await UserService.getYourProfile(token);
          setProfileInfo(response.ourUsers);
      } catch (error) {
          console.error('Error fetching profile information:', error);
      }
  };

  return (
      <div className='col-md-3'>
          {/* <h1>Profile Information</h1>
          <p>Username: {profileInfo.username}</p>
          <p>Name: {profileInfo.name}</p>
          <p>Surname: {profileInfo.surname}</p>
          {profileInfo.role === "ADMIN" && (
              <button><Link to={`/user/update/${profileInfo.id}`}>Update This Profile</Link></button>
          )} */}

          <table className="table col-1 table-borderless">
              <tbody>
              <tr>
                  <td className="text-right"><b>Username:</b></td>
                  <td className="text-left">{profileInfo.username}</td>
              </tr>
              <tr>
                  <td className="text-right"><b>Name:</b></td>
                  <td className="text-left">{profileInfo.name}</td>
              </tr>
              <tr>
                  <td className="text-right"><b>Surname:</b></td>
                  <td className="text-left" >{profileInfo.surname}</td>
              </tr>
              </tbody>
          </table>

          {profileInfo.role === "ADMIN" && (
              <Link to={`/user/update/${profileInfo.id}`} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Update This Profile</Link>
          )}
      </div>      
  );
}

export default UserProfile