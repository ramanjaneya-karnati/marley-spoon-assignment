// Externals
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';

//styles
import styles from './styles';

// Internals
import { raiseAction, Actions } from '../actions';
import ReceipeCard from './components/RecipeCard';
import { urlBuilder } from '../utils';


class Container extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT, {});
  }

  viewRecipeDetailRouter = recipeID => {
    const { history, recipes } = this.props;
    history.push({
      pathname: `/recipe-detail/${urlBuilder(recipes[recipeID].title)}`,
      state: { recipeDetails: recipes[recipeID] }
    });
  };

  render() {
    const { recipes, actions, classes, isLoading, errorMessage } = this.props;
    if (isLoading) {
      return (<div className={classes.loader}><CircularProgress/></div>);
    }
    const recipeCardProps = {
      actions,
      recipes,
      isLoading,
      errorMessage,
      viewRecipeDetailRouter: this.viewRecipeDetailRouter
    };

    return (
      <ReceipeCard {...recipeCardProps} />
    );
  }
}

Container.propTypes = {
  recipes: PropTypes.array.isRequired
};
Container.defaultProps = {
  recipes: []
};
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ raiseAction }, dispatch)
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Container));
