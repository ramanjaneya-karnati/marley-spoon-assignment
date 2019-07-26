import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';

//Internals
import { APP_LABELS } from '../../../constants';

export default class NoRecipe extends React.Component {
  redirectToHome = () => {
    const { history } = this.props;
    history.push('/');
  };
  render() {
    return (
      <Grid
        alignItems="center"
        container
        direction="column"
        justify="center"
      >
        <Typography
          gutterBottom
          variant="h3"
        >
          {APP_LABELS.NOT_FOUND_MESSAGE} :(
        </Typography>
        <Button
          align="center"
          color="secondary"
          id="goBackButton"
          onClick={this.redirectToHome}
          variant="outlined"
        >
          Recipes Page
        </Button>
      </Grid>
    );
  }
}
