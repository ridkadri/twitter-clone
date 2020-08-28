import React from 'react';

import {GlobalStyle} from './Global.styles'

//components
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
    <GlobalStyle/>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
