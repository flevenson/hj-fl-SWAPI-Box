import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card.js';

describe('Card', () => {

	it('should match a snapshot', () => {
		const mockData = [{
			name: 'Joe',
			gender: 'male',
			height: 165  
		}]

		const wrapper = shallow(<Card person={mockData} />)
		expect(wrapper).toMatchSnapshot()
	})
})