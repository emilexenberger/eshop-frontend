import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout this user?');
        if (confirmLogout) {
            UserService.logout();
        }
        navigate("/");
    };

    return (
        <nav>
            <Link to="/" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Home</Link>
            {isAuthenticated && <Link to="/eshop" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Eshop</Link>}
            {isAuthenticated && <Link to="/order" type="button" className="btn btn-primary btn-sm mb-1 mx-1">My orders</Link>}
            {isAdmin && <Link to="/user/management" type="button" className="btn btn-primary btn-sm mb-1 mx-1">User Management</Link>}
            {isAuthenticated && <Link to="/user/profile" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Profile</Link>}
            {isAuthenticated && <Link to="/cart" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Cart</Link>}
            {isAuthenticated && <Link to="/" onClick={handleLogout} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Logout</Link>}
        </nav>
    );
}

export default Navbar;