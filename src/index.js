import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './Store/Reducer/RootReducer';
import { Provider } from 'react-redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore
);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

const store = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
