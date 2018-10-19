import React from 'react'
import * as Cleaner from './helper.js';


describe('getHomeworld', async () => {
	let mockPerson;
	let mockResults;

	beforeEach(() => {
		mockPerson = {
			homeworld: 'https://swapi.co/api/planets/1/',

		}

		mockResults = {
			name: 'Naboo'
		}

		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			status: 200,
			json: () => Promise.resolve({
				results: mockResults
			}),
		}))
	})

	it('calls fetch with the correct params', async () => {
		const expected = `https://swapi.co/api/planets/1/`;
		await Cleaner.getHomeworld(mockPerson)
		expect(window.fetch).toHaveBeenCalledWith(expected)
	})
})