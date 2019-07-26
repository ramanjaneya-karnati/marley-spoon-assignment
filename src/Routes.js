import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import { RecipeDetails, NoRecipe } from '../src/container/components';
import RecipeContainer from '../src/container';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={RecipeContainer}
          exact
          path="/"
        />
        <Route
          component={RecipeDetails}
          exact
          path="/recipe-detail"
        />
        <Route
          component={NoRecipe}
          exact
          path="/no-recipe"
        />
        <Redirect to="/no-recipe" />
      </Switch>
    );
  }
}
