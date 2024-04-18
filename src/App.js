import Home from './pages/Home/Home';
import Eshop from './pages/Eshop/Eshop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './pages/User/UserLogin';
import MyOrders from './pages/Order/MyOrders';
import ItemAdmin from './pages/AdminDatabase/ItemAdmin';
import UserCreate from './pages/User/UserCreate';
import UserProfile from './pages/User/UserProfile';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import UserService from './components/service/UserService';
import UserManagement from './pages/User/UserManagement';
import UserUpdate from './pages/User/UserUpdate';

function App() {
  return (
      <Router>
        <div className='container my-3'>
        <div>Website - Emil Exenberger</div>
        <Navbar />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/eshop"><Eshop /></Route>
          <Route exact path="/user/profile"><UserProfile /></Route>
          <Route exact path="/user/login"><UserLogin /></Route>
          <Route exact path="/user/create"><UserCreate /></Route>
          <Route exact path="/order"><MyOrders /></Route>

          {/* Check if user is authenticated and admin before rendering admin-only routes */}
          {UserService.isAdmin() && (
            <>
              <Route exact path="/item/admin"><ItemAdmin /></Route>
              <Route exact path="/user/management"><UserManagement /></Route>
              <Route exact path="/user/update/:userId"><UserUpdate /></Route>
            </>
          )}
        </Switch>

        <Footer />
        </div>
      </Router>
  );
}

export default App;
