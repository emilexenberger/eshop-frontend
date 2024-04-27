import Home from './pages/Home/Home';
import Eshop from './pages/Eshop/Eshop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/User/UserLogin';
import OrderShowAll from './pages/Order/OrderShowAll';
import UserCreate from './pages/User/UserCreate';
import UserProfile from './pages/User/UserProfile';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import UserService from './components/service/UserService';
import UserManagement from './pages/User/UserManagement';
import UserUpdate from './pages/User/UserUpdate';
import Cart from './pages/Cart/Cart';
import CartCheckout from './pages/Cart/CartCheckout';
import OrderPlaced from './pages/Order/OrderPlaced';
import OrderDetails from './pages/Order/OrderDetails';
import { AuthProvider } from './hooks/useContext/AuthContext';
import NotFound from './pages/NotFound/NotFound';
import ItemManagement from './pages/Item/ItemManagement';
import ItemCreate from './pages/Item/ItemCreate';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='container my-3'>
        <div>Website - Emil Exenberger</div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/login" element={<UserLogin />} />
          <Route exact path="/user/create" element={<UserCreate />} />

          {UserService.isAuthenticated() && (
            <>
              <Route exact path="/eshop" element={<Eshop />} />
              <Route exact path="/user/profile" element={<UserProfile />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/cart/checkout" element={<CartCheckout />} />
              <Route exact path="/order/placed" element={<OrderPlaced />} />
              <Route exact path="/order/all" element={<OrderShowAll />} />
              <Route exact path="/order/:orderId" element={<OrderDetails />} />
            </>
          )}

          {UserService.isAdmin() && (
            <>
              <Route exact path="/item/management" element={<ItemManagement />} />
              <Route exact path="/item/create" element={<ItemCreate />} />
              <Route exact path="/user/management" element={<UserManagement />} />
              <Route exact path="/user/update/:userId" element={<UserUpdate />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
