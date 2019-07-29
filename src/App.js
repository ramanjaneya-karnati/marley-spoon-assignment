import React from 'react';
import { Provider } from 'react-redux';

//Styles
import './App.css';

//Internals
import { Header } from '../src/container/components';
import createStore from './store';

import Routes from './Routes';

const App = () => {
  // eslint-disable-next-line no-undef
  const store = createStore({}, process.env.NODE_ENV);
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header/>
        <Routes/>
      </Provider>
    </React.Fragment>
  );
};

export default App;
//TODO: Need to change h2 tag to component level message 2. refactor recipe-container also
