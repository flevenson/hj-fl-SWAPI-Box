import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar.js';

describe('NavBar', () => {
	let wrapper;
	// let mockFunction;

	// beforeEach(() => {
	//   mockFunction = jest.fn().mockImplementation( await buttonName => {
	//   	() => Promise.resolve({results: []})
	//   })
	//   wrapper = shallow(<NavBar getPeople={mockFunction}/>);		
	// })

	it('should match snapshot', () => {
	  expect(wrapper).toMatchSnapshot();
	})

	// it('should call getPeople with the right parameters after a click', async () => {
	//   const mockEvent = {
	//   	target: {
	//   		getAttribute: await () => 'people'
	//   	}
	//   }

	//   const expected = 'people'
	//   wrapper.simulate('click', mockEvent);
	//   expect(wrapper.getPeople).toHaveBeenCalledWith(expected)
	// })
})