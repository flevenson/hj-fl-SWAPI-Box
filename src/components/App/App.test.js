import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
	let wrapper;
	let mountedWrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
		mountedWrapper = mount(<App />)
	})

	it('should match a snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should call handleNavClick with the right params', () => {
		let	expected = {
			  type: 'click',
			  target: { getAttribute: jest.fn() }
			}

			mountedWrapper.find('.people').simulate('click')
			expect(mountedWrapper.instance().handleNavClick).toHaveBeenCalledWith(expected)
		})

	// it('should update the state of display when getData is called', () => {
	// 	let 
	// })
})
