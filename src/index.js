import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
import './css/styles.css';
import { MarkingOfInformationAboutCountries, countryDataMarkup, clearHTML } from './HTML-markup.js'
import countriesAPI from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
	input: document.getElementById('search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputCountries, DEBOUNCE_DELAY));

function onInputCountries(event) {
	event.preventDefault();
	clearHTML(refs);

	const name = event.target.value.trim();
	if (name.length === 0) return;

	countriesAPI(name)
		.then(countries => {
			numberOfCountries = countries.length;

			if (numberOfCountries === 1) {
				renderInfoOfOneCountry(countries);
			} else if (numberOfCountries <= 10) {
				renderCountriesInfo(countries);
			} else {
				messageInfo(numberOfCountries);
			}
		})
		.catch(error => messageError());
};

function renderInfoOfOneCountry(country) {
	const markup = countryDataMarkup(country);
	refs.countryInfo.insertAdjacentHTML('beforeend', markup);
};

function renderCountriesInfo(countries) {
	const markup = MarkingOfInformationAboutCountries(countries);
	refs.countryList.insertAdjacentHTML('beforeend', markup);
};

function messageInfo(numberOfCountries) {
	Notiflix.Notify.info(`Too many matches found
											(number of countries - ${numberOfCountries}).
											Please enter a more specific name.`);
};

function messageError() {
	Notiflix.Notify.failure('Oops, there is no country with that name');
};
