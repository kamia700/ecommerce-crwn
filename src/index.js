import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// have to wrap the root component with PersistGate. This component delays the rendering of the app's UI until the persisted state is retrieved and saved to redux.
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>  
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
