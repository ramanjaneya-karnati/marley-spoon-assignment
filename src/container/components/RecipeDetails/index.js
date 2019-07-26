import React, { Component } from 'react';
import { Grid, Container, Fab } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';

//Styles
import './RecipeDetails.css';

class RecipeDetails extends Component {
  redirectToHome = () => {
    const { history } = this.props;
    history.push('/');
  };
  render() {
    const { recipeDetails } = this.props.location.state;
    const recipeTags =
      recipeDetails &&
      recipeDetails.tags &&
      recipeDetails.tags.map((tag, index) => <span key={index}>{tag}</span>);
    console.log('RECIPE CHEF', recipeDetails);
    return (
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
        >
          <div className="recipe-title">
            <h1>{recipeDetails.title}</h1>
          </div>
          <div className="recipe-banner">
            <div className="banner-wrapper">
              <img
                alt=""
                src={`https:${recipeDetails.imageUrl}`}
              />
            </div>
          </div>
          <div className="recipe-information">
            <div className="recipe-description">
              <h2>Description</h2>
              <p>{recipeDetails.description}</p>
            </div>
            <div className="recipe-tags">{recipeTags}</div>
            <div className="recipe-chef">
              {recipeDetails.chefName && (
                <h3>Chef: {recipeDetails.chefName}</h3>
              )}
            </div>
          </div>
        </Grid>
        <div className="back-to-home">
          <Fab
            aria-label="edit"
            color="secondary"
            onClick={this.redirectToHome}
          >
            <ArrowBackOutlined fontSize="default" />
          </Fab>
        </div>
      </Container>
    );
  }
}

export default RecipeDetails;
