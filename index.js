// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

// Recommended: Ask for the city name and then the rest of the code

const targetCityName = prompt("Vilken stad");



for(let key in cities) {
    console.log(cities[key].name);
}


for (let key in cities) {
    if (targetCityName.toLocaleLowerCase() == cities[key].name.toLowerCase()) {
        h2.textContent = `${targetCityName} (${cities[key].country})`;
        break;
    } else {
        h2.textContent = `${targetCityName} finns inte i databasen`;
        h3.textContent = "";

    }
}

