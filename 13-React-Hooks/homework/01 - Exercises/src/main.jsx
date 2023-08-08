import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index';

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <BrowserRouter>
         <Home />
      </BrowserRouter>
   </Provider>,
)