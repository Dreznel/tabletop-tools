import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore } from 'redux'
import  reducer from './Reducers'

const store = createStore(reducer);

const render = () =>
  ReactDOM.render(
    <App
      onModifyHp={() => store.dispatch({type: "MODIFY_HP", hpChange: 1, trackerId: 1})}
    />,
    document.getElementById('root')
  );

render();

store.subscribe(render);
//registerServiceWorker();
