import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import HitPointTracker from './hitPointTracker/HitPointTracker'
import './less/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <br/>
        <HitPointTracker/>
      </div>
    );
  }
}

export default App;
