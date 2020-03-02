import React from 'react';
import Login from './containers/Login'
import Profile from './containers/Profile'
import MusicPage from './containers/MusicPage'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar />
      <Login />
      <Profile />
      <MusicPage />
    </div>
  );
}

export default App;
