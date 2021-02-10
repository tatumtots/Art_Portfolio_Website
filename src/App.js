import React from 'react';
import './css/home.css';
import './css/portfolio.css';
import './css/contact.css';
import './css/shop.css';
import './css/nav.css';
import './css/footer.css';
import './App.css';

import Nav from './Nav';
import Shop from './Shop';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" componenet={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home=() => {
  return(
    <div>
    <h1>HomePAge</h1>
    </div>
  )
}

export default App;
