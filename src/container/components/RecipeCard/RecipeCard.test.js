import React from 'react';
import { RecipeCard } from './index';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import recipes from '../../../mockdata/recipes-data.json';

describe('Recipe Card Test Suit', () => {
  let props;
  beforeEach(() => {
    props = {
      recipes,
      viewRecipeDetailRouter: jest.fn(),
      classes: {}
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeCard {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should simulate the recipe card', () => {
    const mockOnRecipeCard = jest.fn();
    props.viewRecipeDetailRouter = mockOnRecipeCard;
    const wrapper = mount(<RecipeCard {...props} />);
    wrapper
      .find('#recipeThumbnail')
      .at(0)
      .simulate('click');
    expect(mockOnRecipeCard).toHaveBeenCalled();
  });
});
