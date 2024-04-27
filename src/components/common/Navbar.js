import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService'; // Pre zistenie administrátorských práv
import { useAuthContext } from '../../hooks/useContext/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuthContext(); // Získajte hodnoty a funkcie z kontextu
    const isAdmin = UserService.isAdmin(); // Získajte informáciu, či je používateľ administrátor
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            UserService.logout();
            logout(); // Kontekstové odhlásenie, ktoré aktualizuje stav autentifikácie
            navigate("/user/logged-out"); // Presmerovanie po odhlásení
        }
    };

    return (
        <nav>
            <Link to="/" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Home</Link>
            {isAuthenticated && <Link to="/eshop" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Eshop</Link>}
            {isAuthenticated && <Link to="/order/all" type="button" className="btn btn-primary btn-sm mb-1 mx-1">My orders</Link>}
            {isAdmin && <Link to="/user/management" type="button" className="btn btn-primary btn-sm mb-1 mx-1">User Management</Link>}
            {isAuthenticated && <Link to="/user/profile" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Profile</Link>}
            {isAuthenticated && <Link to="/cart" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Cart</Link>}
            {isAuthenticated && <Link to="/" onClick={handleLogout} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Logout</Link>}
        </nav>
    );
};

export default Navbar;
