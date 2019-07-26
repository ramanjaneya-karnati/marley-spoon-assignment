// Externals
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internals
import { raiseAction, Actions } from '../actions';
import ReceipeCard from './components/RecipeCard';

class Container extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  }

  viewRecipeDetailRouter = recipeID => {
    const { history, recipes } = this.props;
    history.push({
      pathname: '/recipe-detail',
      state: { recipeDetails: recipes[recipeID] }
    });
  };

  render() {
    const { recipes, actions } = this.props;

    const recipeCardProps = {
      actions,
      recipes,
      viewRecipeDetailRouter: this.viewRecipeDetailRouter
    };

    return (
      <div>
        <ReceipeCard {...recipeCardProps} />
      </div>
    );
  }
}

Container.propTypes = {
  recipes: PropTypes.array.isRequired
};
Container.defaultProps = {
  recipes: []
}
const mapStateToProps = state => ({
  isLoading: state.isLoading,
  recipes: state.recipesData
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ raiseAction }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
