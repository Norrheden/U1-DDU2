// Recommended: All functions declared here
function f1(target) {
    for (let key in cities) {
        if (target == cities[key].name) {
            h2.textContent = `${target} (${cities[key].country})`;
            title.textContent = `${target}`
            return cityFound = true;
            break;
        } else {
            h2.textContent = `${target} finns inte i databasen`;
            title.textContent = `Not Found`
        }
    }
}

// Recommended: constants with references to existing HTML-elements
const title = document.querySelector("title");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const citiesTable = document.getElementById("cities")

// Recommended: Ask for the city name and then the rest of the code

const targetCityName = prompt("Vilken stad");
let cityFound = false;

f1(targetCityName);


if (cityFound == false) {
    h3.textContent = "";
}


for(let key in cities) {
    const div = document.createElement("div")
    div.className = "cityBox"
    div.textContent = cities[key].name;
    citiesTable.appendChild(div);
}






