export const MarkingOfInformationAboutCountries = countries => {
	return countries.map(({ flags, name }) =>
		`<li class="country-header">
			<img src =${flags.svg} alt='flags of ${name.common}' width=40 height=26/>
			<p><b>${name.common}</b> (${name.official})</p>
		</div>
		`).join('');
};

export const countryDataMarkup = countries  => {
	return countries.map(({ flags, name, capital, population, languages }) =>
	`<div>
		<div class="country-header">
			<img src =${flags.svg} alt='flags of ${name.common}' width=60 height=40/>
			<h1 class="country-card-title">${name.common}</h1>
		</div>
		<p><b>Capital: </b>${capital}</p>
		<p><b>Population: </b>${population}</p>
		<p><b>Languages: </b>${Object.values(languages).join(', ')}</p>
	</div>
	`).join('');
};

export const clearHTML = (refs) => {
	refs.countryInfo.innerHTML = '';
	refs.countryList.innerHTML = '';
};

