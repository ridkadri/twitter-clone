import React from 'react';
import './App.css';

//components
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      {/*Widget */}
    </div>
  );
}

export default App;
