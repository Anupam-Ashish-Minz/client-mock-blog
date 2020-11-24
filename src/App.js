import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import { ArticlesList, Article } from './routes/Articles';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const [data, setData] = useState();
  const [cacheData, setCacheData] = useState(null);
  const shareData = (returnedData) => {
    setCacheData(returnedData);
    setData(returnedData);
  }
  
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/articles">
            <ArticlesList shareData={shareData} cachedData={cacheData} />
          </Route>

          <Route exact path="/articles/:id" >
            <Article data={data} />
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
