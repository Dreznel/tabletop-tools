import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import { HitPointTrackerButtonClass } from './HitPointTracker';
import './less/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <HitPointTrackerButtonClass/>
      </div>
    );
  }
}

export default App;
