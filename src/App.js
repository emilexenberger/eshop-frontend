import Home from './pages/Home/Home';
import Eshop from './pages/Eshop/Eshop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/User/UserLogin';
import OrderShowAll from './pages/Order/OrderShowAll';
import ItemAdmin from './pages/AdminDatabase/ItemAdmin';
import UserCreate from './pages/User/UserCreate';
import UserProfile from './pages/User/UserProfile';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import UserService from './components/service/UserService';
import UserManagement from './pages/User/UserManagement';
import UserUpdate from './pages/User/UserUpdate';
import UserLogout from './pages/User/UserLogout';
import Cart from './pages/Cart/Cart';
import CartCheckout from './pages/Cart/CartCheckout';
import OrderPlace from './pages/Order/OrderPlace';

function App() {
  return (
      <BrowserRouter>
        <div className='container my-3'>
        <div>Website - Emil Exenberger</div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/login" element={<UserLogin />} />
          <Route exact path="/user/create" element={<UserCreate />} />
          <Route exact path="/user/logout" element={<UserLogout />} />

          {UserService.isAuthenticated() && (
            <>
              <Route exact path="/eshop" element={<Eshop />} />
              <Route exact path="/user/profile" element={<UserProfile />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<CartCheckout />} />
              <Route exact path="/order" element={<OrderShowAll />} />
              <Route exact path="/order/place" element={<OrderPlace />} />
            </>
          )}

          {UserService.isAdmin() && (
            <>
              <Route exact path="/item/admin" element={<ItemAdmin />} />
              <Route exact path="/user/management" element={<UserManagement />} />
              <Route exact path="/user/update/:userId" element={<UserUpdate />} />
            </>
          )}
        </Routes>

        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
