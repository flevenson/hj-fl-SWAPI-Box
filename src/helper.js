export const fetchPeople = async () => {
		const starWarsApi = 'https://swapi.co/api/people/';
    	const response = await fetch(starWarsApi);
    	const data = await response.json();

		return {...data.results}
	}

// export const formatPlanets = async () => {
// 		const starWarsApi = 'http://swapi.co/api/planets/';
// 		const response = await fetch(starWarsApi);
// 		const data = await response.json();

// 		return {...data.results}
// }
 
