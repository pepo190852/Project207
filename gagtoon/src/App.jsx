import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <a class="navbar-item" href="/">GAGTOON</a>
        <Login/> 
      </header>
    </div>
  );
}

export default App;
