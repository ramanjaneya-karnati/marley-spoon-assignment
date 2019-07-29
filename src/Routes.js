import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Routing
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


// Internals
import { RecipeDetails, NoRecipe } from '../src/container/components';
import RecipeContainer from '../src/container';

const browserHistory = createBrowserHistory();


export default class Routes extends Component {

  redirectToHome = () => {
    browserHistory.push('/');
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route
            component={RecipeContainer}
            exact
            path="/"
          />
          <Route
            path="/recipe-detail"
            redirectToHome={this.redirectToHome}
            render={(props) => <RecipeDetails {...props} redirectToHome={this.redirectToHome}/>}
          />
          <Route
            render={() => <NoRecipe redirectToHome={this.redirectToHome}/>}
            exact
            path="/no-recipe"
          />
          <Redirect to="/no-recipe"/>
        </Switch>
      </Router>
    );
  }
}
