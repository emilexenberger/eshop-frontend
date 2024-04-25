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
          setProfileInfo(response.appUser);
      } catch (error) {
          console.error('Error fetching profile information:', error);
      }
  };

  return (
    <div>
        <h1 className="text-center">Profile Information</h1>
        
        <div className='d-flex justify-content-center'>
            <div className='col-md-3'>
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
        </div>    
    </div>  
  );
}

export default UserProfile