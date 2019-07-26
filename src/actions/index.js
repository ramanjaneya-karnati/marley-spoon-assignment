export const Actions = {
  COMPONENT_INIT: 'COMPONENT_INIT',
  FETCH_RECIPE_DATA: 'FETCH_RECIPE_DATA',
  FETCH_RECIPE_DATA_SUCCESS: 'FETCH_RECIPE_DATA_SUCCESS',
  FETCH_RECIPE_DATA_FAILURE: 'FETCH_RECIPE_DATA_FAILURE'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
