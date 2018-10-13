import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar.js';

describe('NavBar', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
	  mockFunction = jest.fn()
	  wrapper = shallow(<NavBar handleNavClick={mockFunction} />);		
	})

	it('should match snapshot', () => {
	  expect(wrapper).toMatchSnapshot();
	})

	it('should call handleClick when people is clicked', () => {
	  wrapper.find('.people').simulate('click')
	  expect(mockFunction).toBeCalled()
	})

	it('should call handleClick when planets is clicked', () => {
	  wrapper.find('.planets').simulate('click')
	  expect(mockFunction).toBeCalled()
	})

	it('should call handleClick when vehicles is clicked', () => {
	  wrapper.find('.vehicles').simulate('click')
	  expect(mockFunction).toBeCalled()
	})	
})