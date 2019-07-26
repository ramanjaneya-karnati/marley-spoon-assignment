import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';

//Internals
import {APP_LABELS} from '../../../constants';

const Header= () => {
  return (
    <div>
      <CssBaseline />
      <AppBar
        className="theme-color"
        position="relative"
      >
        <Toolbar
          className="dense-custom"
          color="primary"
        >
          <h1 className="app-title">{APP_LABELS.APP_LOGO_TEXT}</h1>
        </Toolbar>
      </AppBar>
      <div className="banner" />
    </div>
  );
};
export default Header;