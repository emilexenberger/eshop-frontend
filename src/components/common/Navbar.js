import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';
import { useHistory } from "react-router-dom";

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const history = useHistory();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout this user?');
        if (confirmLogout) {
            UserService.logout();
        }
        history.push("/");
    };

    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Home</Link></li>}
                {isAuthenticated && <li><Link to="/user/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/user/management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;