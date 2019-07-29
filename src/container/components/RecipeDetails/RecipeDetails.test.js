import React from 'react';

import { RecipeDetails } from './index';

import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import recipes from '../../../mockdata/recipes-data.json';

describe('Test Suite for RecipeDetails Component', () => {
  let props, historyMock;
  beforeEach(() => {
    props = {
      classes:{},
      location: {
        state: {
          recipeDetails: recipes[0]
        }
      }
    };
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeDetails {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should redirect to HomePage on button click', () => {
    const spy = jest.fn();
    props.redirectToHome = spy;
    const wrapper = shallow(<RecipeDetails {...props} />);
    wrapper.find('#goBackButton').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
