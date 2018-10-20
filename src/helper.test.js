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

	describe('getPopulation', async () => {
		let mockPerson;
		let mockResults;

		beforeEach(() => {
			mockPerson = {
				homeworld: 'https://swapi.co/api/planets/1/',
			}

			mockResults = {
				population: 200
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
			await Cleaner.getPopulation(mockPerson)
			expect(window.fetch).toHaveBeenCalledWith(expected)
		})
	})

	describe('getSpecies', async () => {
		let mockPerson;
		let mockResults;

		beforeEach(() => {
			mockPerson = {
				species: 'https://swapi.co/api/species/1/'
			}

			mockResults = {
				name: 'Human'
			}
		})

		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			status: 200,
			json: () => Promise.resolve({
				results: mockResults
			})
		}))

		it('calls fetch with the correct params', async () => {
			const expected = `https://swapi.co/api/species/1/`;
			await Cleaner.getSpecies(mockPerson)
			expect(window.fetch).toHaveBeenCalledWith(expected)
		})
	})

	describe('getResidents', async () => {
		let mockResident;
		let mockResults;

		beforeEach(() => {
			mockResident = {
				[
		        "https://swapi.co/api/people/1/",
		        "https://swapi.co/api/people/2/",
		        "https://swapi.co/api/people/4/",
		        "https://swapi.co/api/people/5/",
		        "https://swapi.co/api/people/6/",
		        "https://swapi.co/api/people/7/"
		        ]
			}

			mockResults = {
				[
				'Luke',
				'Yoda',
				'Laya',
				'Obiwan',
				'Annikan',
				'DarthVader',
				'R2D2'
				]
			}
		})

		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			status: 200,
			json: () => Promise.resolve({
				results: mockResults
			})
		}))

		it('calls fetch with the correct params', async () => {
			const expected = [
		        "https://swapi.co/api/people/1/",
		        "https://swapi.co/api/people/2/",
		        "https://swapi.co/api/people/4/",
		        "https://swapi.co/api/people/5/",
		        "https://swapi.co/api/people/6/",
		        "https://swapi.co/api/people/7/"
		        ];
			await Cleaner.getResidents(mockResident)
			expect(window.fetch).toHaveBeenCalledWith(expected)
		})

	})
})

