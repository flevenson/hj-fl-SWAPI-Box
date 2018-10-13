import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card.js';

describe('Card', () => {
	let mockPeople;
	let mockPlanets;
	let mockVehicles;
	let mockData;
	let wrapper;

	beforeEach(() => {
		mockData = []
	})

	it('should match a snapshot', () => {
		 wrapper = shallow(<Card data={mockData} selected={''} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should match the snapshot after people has been selected', () => {
		mockData = [{
			name: 'Joe',
			homeworld: 'Earth',
			species: 'human',
			population: 5  
		}]

		wrapper = shallow(<Card data={mockData} selected={'people'} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should match the snapshot after planets has been selected', () => {
		mockData = [{
			name: 'Earth',
			climate: 'Hot',
			terrain: 'mountainous',
			population: 5,
			residents: ['Luke', 'Yoda', 'Annikan']
		}]

		wrapper = shallow(<Card data={mockData} selected={'planets'} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should match the snapshot after vehicles has been selected', () => {
		mockData = [{
			name: 'Spaceship',
			model: '3549',
			class: 'Rocket',
			passengers: 5,
			max_atmosphering_speed: 500
		}]

		wrapper = shallow(<Card data={mockData} selected={'vehicles'} />)
		expect(wrapper).toMatchSnapshot()
	})
})