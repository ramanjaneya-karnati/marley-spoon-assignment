import React, { Component } from 'react';
import { Grid, Container, Fab, withStyles } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';

//Styles
import styles from './styles';

export class RecipeDetails extends Component {

  render() {
    const {
      classes,
      location: {
        state: {
          recipeDetails: {
            title,
            imageUrl,
            description,
            chefName,
            tags
          }
        }
      }
    } = this.props;
    const recipeTags = tags.map((tag, index) => <span className={classes.recipeTags} key={index}>{tag}</span>);
    return (
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
        >
          <div className="recipe-title">
            <h1>{title}</h1>
          </div>
          <div className="recipe-banner">
            <div className="banner-wrapper">
              <img
                alt=""
                src={`https:${imageUrl}`}
              />
            </div>
          </div>
          <div className={classes.recipeInformation}>
            <div className={classes.recipeDescription}>
              <h2>Description</h2>
              <p>{description}</p>
            </div>
            <div>{recipeTags}</div>
            <div className="recipe-chef">
              {chefName && (<h3>Chef: {chefName}</h3>)}
            </div>
          </div>
        </Grid>
        <div className={classes.backToHome}>
          <Fab
            aria-label="edit"
            color="secondary"
            onClick={this.props.redirectToHome}
            id="goBackButton"
          >
            <ArrowBackOutlined fontSize="default"/>
          </Fab>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(RecipeDetails);
