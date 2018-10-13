export const fetchData = async (buttonName) => {
		const starWarsApi = `https://swapi.co/api/${buttonName}/`;
    const response = await fetch(starWarsApi);
  	const data = await response.json();
    const results = {...data.results};
    switch (buttonName) {
        case 'people':
          const newPeopleData = await getPeople(results)
          return { ...newPeopleData };
        case 'planets':
          const newPlanetData = await getPlanets(results)
          return {...newPlanetData};
        default:
		      return { ...results }
        }
    
	}

 
  const getPeople = async (data) => {
    const peopleKeys = await Object.keys(data)
    const newPeople = peopleKeys.map( async (person) => {
      person = {
        name: data[person].name,
        homeworld: await getHomeworld(data[person]),
        species: await getSpecies(data[person]),
        population: await getPopulation(data[person])
      }
      return person
    })
    const resolvedPeople = await Promise.all(newPeople)
    return resolvedPeople
  }

  const getHomeworld = async (person) => {
    const homeworldAPI = person.homeworld;
    const homeworldResponse = await fetch(homeworldAPI);
    const homeworldData = await homeworldResponse.json();

    return homeworldData.name
  }

  const getPopulation = async (person) => {
    const homeworldAPI = person.homeworld;
    const homeworldResponse = await fetch(homeworldAPI);
    const homeworldData = await homeworldResponse.json();

    return homeworldData.population
  }

  const getSpecies = async (person) => {
    const speciesAPI = person.species;
    const speciesResponse = await fetch(speciesAPI);
    const speciesData = await speciesResponse.json();

    return speciesData.name
  }

  const getPlanets = async (data ) => {
    const planetKeys = await Object.keys(data);
    const newPlanets = planetKeys.map( async (planet) => {
      planet = {
      name: data[planet].name,
      terrain: data[planet].terrain,
      population: data[planet].population,
      climate: data[planet].climate,
      residents: await getResidents(data[planet])
      }
      return planet
    })
    return await Promise.all(newPlanets)
  }

  const getResidents = async (planet) => {
    if (!planet.residents.length) {
      return 'unknown'
    } else {
      const residentNames = planet.residents.map( async url => {
      const residentResponse = await fetch(url);
      const residentData = await residentResponse.json();
      return residentData.name;
    })
      return await Promise.all(residentNames);
  } 
}
  
  





