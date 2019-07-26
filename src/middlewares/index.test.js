// Externals
import React from 'react';
import configureMockStore from 'redux-mock-store';

// Internals
import { Actions, raiseAction } from '../actions';
import middlewares, { saveRecipeData } from './index';
import { API_TYPE } from '../constants';

describe('Test Suite for middlewares', () => {
  let store;
  const mockStore = configureMockStore([middlewares]);

  beforeEach(() => {
    store = mockStore();
  });

  it('Should raise action to middleware', () => {
    store.dispatch(raiseAction(Actions.COMPONENT_INIT));
    expect(store.getActions()[0].type).toEqual(Actions.COMPONENT_INIT);
  });

  it('Should raise action to reducer to store recipe data', async () => {
    await saveRecipeData(store);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
  it('Should raise action to reducer to store tags data', async () => {
    await saveRecipeData(store);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
  it('Should raise action to reducer to store chef data', async () => {
    await saveRecipeData(store, API_TYPE.CHEF);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
});
