import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import MonsterSelector from './hitPointTracker/MonsterSelector'
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
        <MonsterSelector
          onModifyHp = { this.props.onModifyHp }
        />
      </div>
    );
  }
}

export default App;
