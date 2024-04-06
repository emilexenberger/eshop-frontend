import Navbar from './components/Navbar';
import CreateItem from './pages/Item/CreateItem';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/item/create">
              <CreateItem />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
