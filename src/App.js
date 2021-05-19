import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';

import AirplaneContainer from './scenes/avia';
import Result from './scenes/result';

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation-wrap">
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/airplane">Airplane</Link>
            </li>
            <li>
              <Link to="/train">Train</Link>
            </li>
            <li>
              <Link to="/hotel">Hotel</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/train">
            <Train />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/airplane">
            <AirplaneContainer />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Well come to our team</h2>;
}

function Train() {
  return <h2>Train Ticket</h2>;
}

function Hotel() {
  return <h2>Book Hotel</h2>;
}

export default App;
