import React from 'react';
import Login from './containers/Login'
import Profile from './containers/Profile'
import MusicPage from './containers/MusicPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello from App</h1>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/music_page" component={MusicPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
