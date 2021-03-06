/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';

import NavBar from './NavBar.js';


describe('NavBar', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
	  mockFunction = jest.fn()
	  wrapper = shallow(<NavBar 
	  	handleNavClick={mockFunction} 
	  	selected={''} 
	  />);		
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

	it('should display people when selected', () => {
		wrapper = shallow(<NavBar selected={'people'} 
								  handleNavClick={mockFunction}
						  />)
		expect(wrapper.find('.selected').length).toEqual(1)
	})

	it('should display planets when selected', () => {
		wrapper = shallow(<NavBar selected={'planets'} 
								  handleNavClick={mockFunction} 
						  />)
		expect(wrapper.find('.selected').length).toEqual(1)
	})

	it('should display vehicles when selected', () => {
		wrapper = shallow(<NavBar selected={'vehicles'} 
								  handleNavClick={mockFunction}
						  />)
		expect(wrapper.find('.selected').length).toEqual(1)
	})

	// it('should only allow one button to be selected', () => {
	//   wrapper = mount(<NavBar handleNavClick={mockFunction} selected={''} /> );
	//   let selected = wrapper.find('.selected')
	//   wrapper.find('.people').simulate('click')
	//   selected = wrapper.find('.selected')
	//   console.log(selected)
	// })	
})