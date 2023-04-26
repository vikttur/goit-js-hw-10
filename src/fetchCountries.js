const MAIN_LINK = 'https://restcountries.com/v3.1/';
const fieldsFilter = 'status=true&fields=flags,name,capital,population,languages';

export default function fetchCountries(name) {
	return fetch(`${MAIN_LINK}/name/${name}?${fieldsFilter}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw error(response.status);
			};
		});
}
