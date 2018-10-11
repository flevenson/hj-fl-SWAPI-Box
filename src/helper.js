export const fetchData = async (buttonName) => {
		const starWarsApi = `https://swapi.co/api/${buttonName}/`;
    	const response = await fetch(starWarsApi);
    	const data = await response.json();
      const results = {...data.results}
      if (buttonName === 'people'){
        const newPeopleData = await getPeople(results)
        return { ...newPeopleData }
      } else {
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