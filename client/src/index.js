import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
import store from './redux/store';
>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f
import './index.css';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f
  </React.StrictMode>,
  document.getElementById('root')
);
