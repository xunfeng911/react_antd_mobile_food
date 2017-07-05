import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index.jsx';
import {Provider} from 'react-redux';
import store from './redux/index.jsx';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './public/css/common.scss';
import './public/css/iconfont.css';

const app = document.getElementById('root');

store.subscribe(() => { //监听state变化
  // window.console.log(store.getState())
});
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Route />
      </Provider>
    </AppContainer>,
    app
  );
};

render();


if (module.hot) {
  module.hot.accept('./router/index.jsx', () => { render() })
}


registerServiceWorker();