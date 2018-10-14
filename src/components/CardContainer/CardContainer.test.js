import React from 'react';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {

	it('should match a snapshot when display is empty', () => {
		const wrapper = shallow(<CardContainer 									
									display={{}} 
									selected={''}
								/>);
		expect(wrapper).toMatchSnapshot()
	})

	it('should match a snapshot after display has been populated', () => {
		const mockData = {
			 0: [{ 
			  name: 'Joe',
			  homeworld: 'earth',
			  species: 'human',
			  population: 100
			 }],
			 2: [{
			  name: 'Luke',
			  homeworld: 'Tattooine',
			  species: 'human',
			  population: 75
			 }]
		}

		const wrapper = mount(<CardContainer
								 display={mockData} 
								 selected={'people'} 
							  />)

		expect(wrapper).toMatchSnapshot()
	})
})