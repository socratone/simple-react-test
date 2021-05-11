import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Basic from './components/Basic';
import ApiMockup from './components/ApiMockup';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Basic</Link>
            </li>
            <li>
              <Link to="/apimockup">ApiMockup</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/ApiMockup">
            <ApiMockup />
          </Route>
          <Route path="/">
            <Basic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
