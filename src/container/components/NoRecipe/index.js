import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';

//Internals
import {APP_LABELS} from '../../../constants'

export default class NoRecipe extends React.Component {

  redirectToHome = () => {
    const {history} = this.props;
    history.push('/')
  }
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3" gutterBottom>
          {APP_LABELS.NOT_FOUND_MESSAGE} :(
        </Typography>
        <Button variant="outlined" color="secondary"align="center"  onClick={this.redirectToHome}>Recipes Page</Button>
      </Grid>
    );
  }
}

