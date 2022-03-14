// função ordenar
export const filmOrder = (data, select) => {
  if (select === "A-Z") {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
	}
	
  if (select === "Z-A") {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
	}
	
  if (select === "older") {
    return data.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);
  }

  if (select === "newer") {
    return data.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);
  }

  if (select === "score") {
    return data.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1);
	}
	
	if (select === "lowerscore") {
    return data.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1);
  }

  return data;
};

// função do botão de busca
export const filterMovie = (data, buscaInput) => {
	return data.filter((filme) => filme.title.toLowerCase().includes(buscaInput.toLowerCase()));
};

// função de filtrar os personagens por gênero
export const filterFemale = (characters) => {
  return characters.filter(character => {
      return character.gender === "Female";
  })
};

export const filterMale = (characters) => {
  return characters.filter(character => {
      return character.gender === "Male";
  })
};

export const filterNA = (characters) => {
  return characters.filter(character => {
      return character.gender === "NA";
  })
};