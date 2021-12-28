import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/posts'}>Posts</Link>
    </div>
  );
}

export default App;
