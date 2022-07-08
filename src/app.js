import axios from "axios";

console.log('Hallo daar!');

const API_Key = "https://restcountries.com/v2/all";
const countryList = document.getElementById('country-container');


async function fetchCountries(){

    try {
        const response = await axios.get(API_Key);

        response.data.sort(( a, b) => {
            return a.population - b.population;
        });

        const mappedResponse = response.data.map(( country ) => ( {
                countryRegion: country.region,
                countryName: country.name,
                countryPop: country.population,
                countryFlag: country.flags.png
        }));

        for (let i = 0; i < mappedResponse.length; i++) {
            countryList.innerHTML +=
                `
            <li class="${mappedResponse[i].countryRegion}">  
                <h4>${mappedResponse[i].countryName} has a population of: </h4>
                <p>${mappedResponse[i].countryPop}</p> 
                <img src="${mappedResponse[i].countryFlag}" alt="Flag">
            </li>   
                `
        }



    } catch(e) {
        console.error( e );
    }

}

fetchCountries();

