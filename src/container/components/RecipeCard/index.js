import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid, withStyles,
  SnackbarContent
} from '@material-ui/core';

//Styles
import styles from './styles';

//Internals
import { APP_LABELS } from '../../../constants';


export class RecipeCard extends Component {
  render() {
    const { classes, recipes, viewRecipeDetailRouter, errorMessage } = this.props;
    if (errorMessage && errorMessage.length > 0) {
      return (<SnackbarContent className={classes.snackbar} message={errorMessage}/>);
    }
    const recipeCardItem = recipes.map((recipe, index) => {
      return (
        <Card
          className={classes.card}
          key={index}
        >
          <CardActionArea>
            <CardMedia
              alt={recipe.title}
              component="img"
              height="303"
              id="recipeThumbnail"
              image={`https:${recipe.imageUrl}`}
              onClick={() => {
                viewRecipeDetailRouter(index);
              }}
              title={recipe.title}
            />
          </CardActionArea>
          <CardContent>
            <div className="card-title">
              <h2>{recipe.title}</h2>
              {recipe && recipe.chefName ? (
                <h3>Chef: {recipe.chefName}</h3>
              ) : (
                <h3>Chef: Martha</h3>
              )}
            </div>
          </CardContent>
        </Card>
      );
    });
    return (
      <div>
        <h2 className={classes.recipeLabel}>{APP_LABELS.MENU_PAGE_TITLE}</h2>
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="space-evenly"
        >
          {recipeCardItem}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RecipeCard);
