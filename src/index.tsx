import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, Store } from 'redux';
import rootReducer, { PreviewReducer } from './store/reducers';

const store:Store = createStore(combineReducers([rootReducer, PreviewReducer]));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
