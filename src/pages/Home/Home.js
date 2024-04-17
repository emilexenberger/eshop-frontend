import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [userData, setUserData] = useState({
    userLogged: false,
    roleAdmin: false,
    appUser: null,
  });

  useEffect(() => {
    document.title = "Home";

    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setUserData({
        userLogged: data.userLogged,
        roleAdmin: data.roleAdmin || false,
        appUser: data.appUser || null,
      }));
  }, []);

  return (
    <div>
      {/* Greetings */}
      {userData.userLogged ? (
        <div>
          <h1>Welcome!</h1>
          {userData.roleAdmin && <p>You have admin rights.</p>}
        </div>
      ) : (
        <h1>Welcome!</h1>
      )}

      {/* Buttons */}
      {userData.userLogged ? (
        <div>
          {userData.roleAdmin && <Link to="/item/admin" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Admin - Edit database</Link>}
          <Link to="/eshop" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Eshop</Link>
          <Link to="/order" type="button" className="btn btn-primary btn-sm mb-1 mx-1">My orders</Link>
          <Link to="/user" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Profile</Link>
          <Link to="/user/logout" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Log out</Link>
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
