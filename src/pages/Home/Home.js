import { Link } from 'react-router-dom';
import UserService from '../../components/service/UserService';
import { useEffect, useState } from 'react';

const Home = () => {
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();

  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfileInfo();
    }
  }, [isAuthenticated]);

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
    <div>
      {/* Greetings */}
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {profileInfo.name}!</h1>
          {isAdmin && <p>You have admin rights.</p>}
        </div>
      ) : (
        <h1>Welcome!</h1>
      )}

      {/* Buttons */}
      {isAuthenticated ? (
        <div>
          {isAdmin && <Link to="/item/admin" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Admin - Edit database</Link>}
          <Link to="/eshop" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Eshop</Link>
          <Link to="/order" type="button" className="btn btn-primary btn-sm mb-1 mx-1">My orders</Link>
          <Link to="/user/profile" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Profile</Link>
        </div>
      ) : (
        <div>
          <Link to="/user/login" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Log in</Link>
          <Link to="/user/create" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Create a new account</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
