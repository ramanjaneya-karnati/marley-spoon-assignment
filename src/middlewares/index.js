import { Actions, raiseAction } from '../actions';
import { API_TYPE } from '../constants';
import { getRecipes } from '../services';
import { transformRecipesData } from '../utils';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      store.dispatch(raiseAction(Actions.FETCH_RECIPE_DATA));
      saveRecipeData(store);
      break;
    default:
      break;
  }
};

export const saveRecipeData = async store => {
  try {
    const [recipeResponse, tagsResponse, chefResponse] = await Promise.all([
      getRecipes(API_TYPE.RECIPES),
      getRecipes(API_TYPE.TAGS),
      getRecipes(API_TYPE.CHEF)
    ]);
    store.dispatch(
      raiseAction(Actions.FETCH_RECIPE_DATA_SUCCESS, [
        recipeResponse,
        tagsResponse,
        chefResponse
      ])
    );
    const recipes = transformRecipesData(chefResponse, recipeResponse, tagsResponse);
    store.dispatch(raiseAction(Actions.FETCH_RECIPE_DATA_SUCCESS, recipes));
  } catch (e) {
    store.dispatch(raiseAction(Actions.FETCH_RECIPE_DATA_FAILURE, 'Something went wrong, please try again...'));
  }
};
