import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index.jsx';
import {Provider} from 'react-redux';
import store from './redux/index.jsx';
import registerServiceWorker from './registerServiceWorker';


const app = document.getElementById('root');

store.subscribe(() => { //监听state变化
  // window.console.log(store.getState())
});
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  app
);
registerServiceWorker();