import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar.js';

describe('NavBar', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
	  mockFunction = jest.fn().mockImplementation( buttonName => {
	  	() => Promise.resolve({results: []})
	  })
	  wrapper = shallow(<NavBar getData={mockFunction} />);		
	})

	it('should match snapshot', () => {
	  expect(wrapper).toMatchSnapshot();
	})

	it('should call handleClick when a button is clicked', () => {
	  const mockEvent = {
	  	target: {
	  		getAttribute: () => 'people'
	  	}
	  }
	  const button = wrapper.find('.people')
	  const expected = 'people'
	  console.log(button)
	  button.simulate('click', mockEvent);
	  expect(wrapper.handleClick).toHaveBeenCalled()
	})
})