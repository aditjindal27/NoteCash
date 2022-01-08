//Use netlify for deployment of frontend

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from "@material-ui/core";
import 'typeface-roboto';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createTheme({
  palette: {
     primary: {
        main: "#00c805"
               },
     secondary: {
        main: "#00c805"
                }
           },
});


ReactDOM.render(
  
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
