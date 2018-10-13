import React from 'react';
import { shallow } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {

	it('should match a snapshot', () => {
		const mockData = {
			name: 'Joe',
			gender: 'male',
			height: 165 
		}
		const wrapper = shallow(<CardContainer 
									people={mockData} 
									display={{}} 
									selected={''}
								/>);
		expect(wrapper).toMatchSnapshot()
	})
})