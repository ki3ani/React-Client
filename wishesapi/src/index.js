import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom/es/Switch';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';


const routing = (
  <Router>
    <React.StrictMode>
      <Header />
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
        <Footer />
    </React.StrictMode>
  </Router>

);

ReactDOM.render(routing, document.getElementById('root'));
