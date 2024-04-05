import Navbar from './components/Navbar';
import CreateItem from './CreateItem';
import Home from './Home';
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
