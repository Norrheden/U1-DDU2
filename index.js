
//Hittar min staden
function findMinCity(minId) {
    for(let city of cities) {
        if(minId == city.id) {
            return city.name;
        }
    }
}

//Hittar max staden
function findMaxCity(maxId) {
    for(let city of cities) {
        if(maxId == city.id) {
            return city.name;
        }
    }
}

//Hittar kortaste avstånd id
function findMinCityId(id, min) {
    for(let object of distances) {
        if(id == object.city1 && min == object.distance) {
            return object.city2;
        } 
        if(id == object.city2 && min == object.distance) {
            return object.city1;
        } 
        
    }
}

//Hittar längsta avstånd id
function findMaxCityId(id, max) {
    for(let object of distances) {
        if(id == object.city1 && max == object.distance) {
            return object.city2;
        } 
        if(id == object.city2 && max == object.distance) {
            return object.city1;
        } 
    }
}

//Hittar staden, om staden hittades så blir cityfound true annars false
function findCity(targetCityName) {
    for (let city of cities) {
        if (targetCityName == city.name) {
            h2.textContent = `${targetCityName} (${city.country})`;
            title.textContent = `${targetCityName}`;
            return cityFound = true;
        } else {
            h2.textContent = `${targetCityName} finns inte i databasen`;
            title.textContent = `Not Found`
        }
    }
}

//Hittar id på staden
function findId(targetCityName) {
    for (let city of cities) {
        if (targetCityName == city.name) {
            return city.id;
        }
    }
}

//Tar alla tänkbara avstånd
function distance(id) {
    for(let object of distances) {
        if (id == object.city1) {
            arrayOfdistances.push(object.distance);
        }
        if (id == object.city2) {
            arrayOfdistances.push(object.distance);
        }
        
    } return arrayOfdistances;
}



const title = document.querySelector("title");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const citiesTable = document.getElementById("cities")
const divTable = document.getElementById("table");
const closest = document.getElementById("closest");
const furthest = document.getElementById("furthest");



// Start
const targetCityName = prompt("Vilken stad");
let cityFound = false;
let arrayOfdistances =[]



//Går in i funktionen för att hitta staden
findCity(targetCityName);



//Går in i funktionen för att hitta stadens id
let id = findId(targetCityName);
console.log(id);



//Vi går in i denna om vi inte hittade staden
if (cityFound == false) {
    h3.textContent = "";
}



//Går in i funktionen för att hitta alla asvtånd
let everyDistance = distance(id);
console.log(everyDistance);

const max = Math.max(...everyDistance);
const min = Math.min(...everyDistance);

console.log(max);
console.log(min);

let maxId = findMaxCityId(id, max);
console.log(maxId);

let minId = findMinCityId(id, min);
console.log(minId);

const targetCityMax = findMaxCity(maxId);
console.log(targetCityMax);

const targetCityMin = findMinCity(minId);
console.log(targetCityMin)



//Skapar div boxarna och sätter färger(class)
for(let city of cities) {
    const div = document.createElement("div")
    div.className = "cityBox"
    div.textContent = city.name;
    citiesTable.appendChild(div);
    if (targetCityName == city.name) {
        div.className = "target cityBox";
    }
    if (targetCityMax == city.name) {
        div.className = "furthest cityBox";
        div.textContent = `${city.name} ligger ${Math.floor(max/10)} mil bort`;
        furthest.textContent = city.name;
    }
    if (targetCityMin == city.name) {
        div.className = "closest cityBox";
        div.textContent = `${city.name} ligger ${Math.floor(min/10)} mil bort`;
        closest.textContent = city.name;
        
    }
}


// Skapa tabellen
const nrCols = 38;
const nrRows = 39;
for(let i = 0; i<=nrRows; i++ ) {
    
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("head_row");
    
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
            cell.textContent = j;
        }
        if(i>0 && j<=38) {

            city1 = i-1;
            city2 = j;
            
            for(let k = 0; k<distances.length; k++) {
                if(city1 == distances[k].city1 && city2 == distances[k].city2) {
                    cell.textContent = Math.floor(distances[k].distance/10);
                }
                if(city1 == distances[k].city2 && city2 == distances[k].city1) {
                    cell.textContent = Math.floor(distances[k].distance/10);
                }

            }                         
        }
        if(i>0 && j%2 == 0) {
            cell.classList.add("even_col")

        }
        if(i%2 == 1) {
            cell.classList.add("even_row")
        }
    }
}






