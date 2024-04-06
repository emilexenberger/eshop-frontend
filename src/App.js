import Home from './pages/Home/Home';
import Eshop from './pages/Eshop/Eshop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './pages/User/User';
import UserLogin from './pages/User/UserLogin';
import UserLogout from './pages/User/UserLogout';
import UserCreate from './pages/User/UserCreate';
import MyOrders from './pages/Order/MyOrders';
import ItemAdmin from './pages/AdminDatabase/ItemAdmin';

function App() {
  return (
    <Router>
      <div className='container my-3'>
      <div>Website - Emil Exenberger</div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/eshop"><Eshop /></Route>
          <Route exact path="/user"><User /></Route>
          <Route exact path="/user/login"><UserLogin /></Route>
          <Route exact path="/user/logout"><UserLogout /></Route>
          <Route exact path="/user/create"><UserCreate /></Route>
          <Route exact path="/order"><MyOrders /></Route>
          <Route exact path="/item/admin"><ItemAdmin /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
