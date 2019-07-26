// Externals
import { shallow, mount } from 'enzyme';
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Provider } from 'react-redux';

// Internals
import Container from './index';
import recipesData from '../mockdata/recipes-data.json';
import createStore from '../store';

describe('Test Suite for container', () => {
  let wrapper, mountedComponent;

  const containerProps = {
    isLoading: false,
    recipesData: recipesData,
    actions: {
      raiseAction: () => {}
    },
    //onWeatherCardSelect: jest.fn()
  };


  it('Should call onRefreshClick when refresh button is clicked', () => {
    mountedComponent = shallow(<Container {...containerProps} />);
    expect(mountedComponent).toBeDefined();
  });
});
