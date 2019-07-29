import { Actions } from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_RECIPE_DATA_SUCCESS:
    case Actions.FETCH_RECIPE_DATA_FAILURE:
      return false;
    case Actions.FETCH_RECIPE_DATA:
      return true;
    default:
      return state;
  }
};

const recipes = (state = [], action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_RECIPE_DATA_FAILURE:
      return [];
    case Actions.FETCH_RECIPE_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const errorMessage = (state = '', action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_RECIPE_DATA_SUCCESS:
      return '';
    case Actions.FETCH_RECIPE_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default {
  isLoading,
  recipes,
  errorMessage
};
