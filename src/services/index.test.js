import { getRecipes } from '../services';
import { API_TYPE } from '../constants';

describe('Test Suite for services', () => {
  it('Should get 200 status from API', async () => {
    const response = await getRecipes(API_TYPE.RECIPES);
    expect(response).toBeDefined();
  });

  it('Should catch error', done => {
    getRecipes().catch(error => {
      expect(error).toBeDefined();
      done();
    });
  });
});
