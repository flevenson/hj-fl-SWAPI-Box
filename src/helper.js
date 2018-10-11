export const fetchData = async (buttonName) => {
		const starWarsApi = `https://swapi.co/api/${buttonName}/`;
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
 
