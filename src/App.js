import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Articles from './routes/Articles';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/" render={()=><div> 404 </div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
