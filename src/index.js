import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore } from 'redux'
import  reducer from './Reducers'
import { Provider } from 'react-redux';


const store = createStore(reducer);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App
        onModifyHp={() => store.dispatch({type: "MODIFY_HP", hpChange: 1, trackerId: 1})}
      />
    </Provider>,
    document.getElementById('root')
  );

render();

store.subscribe(render);
//registerServiceWorker();
