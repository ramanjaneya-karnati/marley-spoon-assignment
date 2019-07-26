import React from 'react';

//Internals
import NoRecipe from './index';

import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';



describe('Test Suite for NoRecipe Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoRecipe  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should redirect to HomePage on button click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<NoRecipe />);
    wrapper.find('Button').simulate('click');
    expect(spy).toHaveBeenCalled();
  })
});
