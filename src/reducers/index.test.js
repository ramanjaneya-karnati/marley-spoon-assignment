// Internals
import reducers from './index';
import { Actions } from '../actions';

describe('Test Suite for reducers', () => {
  let state, action;

  beforeEach(() => {
    action = {
      type: Actions.COMPONENT_INIT
    };
    state = false;
  });

  it('Should return isLoading false when action is COMPONENT_INIT', () => {
    expect(reducers.isLoading(state, action)).toEqual(false);
  });

  it('Should return isLoading true when action is FETCH_RECIPE_DATA', () => {
    action.type = Actions.FETCH_RECIPE_DATA;
    expect(reducers.isLoading(state, action)).toEqual(true);
  });

  it('Should return isLoading false when action is FETCH_RECIPE_DATA_SUCCESS or FETCH_RECIPE_DATA_FAILURE', () => {
    action.type = Actions.FETCH_RECIPE_DATA_SUCCESS;
    expect(reducers.isLoading(state, action)).toEqual(false);
    action.type = Actions.FETCH_RECIPE_DATA_FAILURE;
    expect(reducers.isLoading(state, action)).toEqual(false);
  });

  it('Should return recipesData as `[]` when action is COMPONENT_INIT', () => {
    expect(reducers.recipes(state, action)).toEqual([]);
  });

  it('Should return recipesData with records when action is FETCH_RECIPE_DATA_SUCCESS', () => {
    action = {
      type: Actions.FETCH_RECIPE_DATA_SUCCESS,
      payload: { data: 'now' }
    };
    expect(reducers.recipes(state, action)).toEqual({ data: 'now' });
  });
});
