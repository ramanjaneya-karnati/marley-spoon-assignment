import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';

//Internals
import { APP_LABELS } from '../../../constants';

export default class NoRecipe extends React.Component {

  render() {
    const { redirectToHome } = this.props;
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
          onClick={redirectToHome}
          variant="outlined"
        >
          Recipes Page
        </Button>
      </Grid>
    );
  }
}
