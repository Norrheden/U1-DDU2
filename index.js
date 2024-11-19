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
const divTable = document.getElementById("table");

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


const nrCols = 38;
const nrRows = 39;

for(let i = 0; i<=nrRows; i++ ) {
    
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("head_row");
    // [i-1]
    divTable.append(cell);
    if (i>0) {
    cell.textContent = `${i-1}-${cities[i-1].name}`;
    }
    if(i == 0) {
        cell.style.color = "white";
    }
    if(i%2 == 1) {
        cell.classList.add("even_row")
    }
    
    for(let j = 0; j<=nrCols; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        divTable.append(cell);
        if(i==0 && j<=38 ) {
            cell.classList.add("head_column")
            cell.textContent = [j];
        }
        if(i>0 && j%2 == 0) {
            cell.classList.add("even_col")

        }
        if(i%2 == 1) {
            cell.classList.add("even_row")
        }
    }
}

/*
for(let i = 0; i<=nrRows; i++) {

    for(let j = 0; j<=nrCols; i++) {
        const div = document.createElement("div");
        div.textContent = "hej"
        div.className = "cell"
        divTable.appendChild(div);

        

    }

}

*/




