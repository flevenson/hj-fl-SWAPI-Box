export const formatPeople = async () => {
		const starWarsApi = 'https://swapi.co/api/people/';
    	const response = await fetch(starWarsApi);
    	const data = await response.json();

		return {...data}
	}
 
