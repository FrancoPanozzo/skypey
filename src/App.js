import React from 'react';
import './App.css';
import Main from './containers/Main';
import Sidebar from './containers/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
