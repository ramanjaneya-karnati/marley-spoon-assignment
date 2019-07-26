import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

//Styles
import './App.css';

//Internals
import { Header } from '../src/container/components';

//Routing
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
const browserHistory = createBrowserHistory();

export default () => {
  const store = createStore({}, process.env.NODE_ENV);
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Header />
          <div className="recipe-container">
            <h2 className="recipe-label">Our weekly menu</h2>
            <Routes />
          </div>
        </Router>
      </Provider>
    </React.Fragment>
  );
};
//TODO: Need to change h2 tag to component level message 2. refactor recipe-container also
