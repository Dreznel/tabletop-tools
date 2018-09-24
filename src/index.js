import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore } from 'redux'
import  reducer from './Reducers'
import { Provider } from 'react-redux';


const store = createStore(reducer,
  {
    monsters:
      [
        {
          name: "PreloadedStateMonster1",
          maxHp: 5,
          currentHp:5
        },
        {
          name: "PreloadedStateMonster2",
          maxHp: 40,
          currentHp:40
        }
      ]
  }
);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App
        onModifyHp={() => store.dispatch({type: "MODIFY_HP", hpChange: 1, monsterIndex: 1})}
      />
    </Provider>,
    document.getElementById('root')
  );

render();

store.subscribe(render);
//registerServiceWorker();
