import React from 'react';
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit" 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'  
import sanphamReducer from './Reducers/sanphamReducers';
import App from './pages/App';
import "./app.scss";   

const store = configureStore({
  reducer: {
    sanpham: sanphamReducer, 
  },
  middleware: [thunk]
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
 
