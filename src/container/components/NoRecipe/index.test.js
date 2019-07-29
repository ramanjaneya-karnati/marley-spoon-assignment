import React from 'react';

//Internals
import NoRecipe from './index';

import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

describe('Test Suite for NoRecipe Component', () => {
  let store, historyMock;
  beforeEach(() => {
    historyMock = { push: jest.fn() };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoRecipe/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should redirect to HomePage on button click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<NoRecipe history={historyMock} redirectToHome={spy}/>);
    wrapper.find('#goBackButton').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
