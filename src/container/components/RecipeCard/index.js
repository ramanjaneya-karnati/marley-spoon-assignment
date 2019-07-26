import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from '@material-ui/core';
import './RecipeCard.css';

class RecipeCard extends Component {
  render() {
    const { recipes, viewRecipeDetailRouter } = this.props;
    const recipeCardItem =
      recipes &&
      recipes.map((recipe, index) => {
        return (
          <Card
            className="card"
            key={index}
          >
            <CardActionArea>
              <CardMedia
                alt={recipe.title}
                component="img"
                height="303"
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
      <Grid
        alignItems="center"
        container
        direction="row"
        justify="center"
      >
        {recipeCardItem}
      </Grid>
    );
  }
}

export default RecipeCard;
