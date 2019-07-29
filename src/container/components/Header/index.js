import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';

//Internals
import { APP_LABELS } from '../../../constants';

export default () => {
  return (
    <div>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar color="primary">
          <h1 className="app-title">{APP_LABELS.APP_LOGO_TEXT}</h1>
        </Toolbar>
      </AppBar>
      <div className="banner"/>
    </div>
  );
};