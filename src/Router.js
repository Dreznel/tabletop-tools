import React, { Component } from 'react';
import TabletopToolsSidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './App.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  }
}

export default Router;
