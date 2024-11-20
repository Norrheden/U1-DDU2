

//Hittar min staden
function findMinCity(minId) {
    for(let key in cities) {
        if(minId == cities[key].id) {
            return cities[key].name;
        }
    }
}

//Hittar max staden
function findMaxCity(maxId) {
    for(let key in cities) {
        if(maxId == cities[key].id) {
            return cities[key].name;
        }
    }
}


//Hittar kortaste avstånd id
function findMinCityId(id, min) {
    for(let key in distances) {
        if(id == distances[key].city1 && min == distances[key].distance) {
            return distances[key].city2;
        } 
        if(id == distances[key].city2 && min == distances[key].distance) {
            return distances[key].city1;
        } 
        
    }
}


//Hittar längsta avstånd id
function findMaxCityId(id, max) {
    for(let key in distances) {
        if(id == distances[key].city1 && max == distances[key].distance) {
            return distances[key].city2;
        } 
        if(id == distances[key].city2 && max == distances[key].distance) {
            return distances[key].city1;
        } 
    }
}
//Hittar staden, om staden hittades så blir cityfound true annars false
function findCity(targetCityName) {
    for (let key in cities) {
        if (targetCityName == cities[key].name) {
            h2.textContent = `${targetCityName} (${cities[key].country})`;
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
    for (let key in cities) {
        if (targetCityName == cities[key].name) {
            return cities[key].id;
        }
    }
}

//Tar alla tänkbara avstånd
function distance(id) {
    for(let key in distances) {
        if (id == distances[key].city1) {
            arrayOfdistances.push(distances[key].distance);
        }
        if (id == distances[key].city2) {
            arrayOfdistances.push(distances[key].distance);
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
for(let key in cities) {
    const div = document.createElement("div")
    div.className = "cityBox"
    div.textContent = cities[key].name;
    citiesTable.appendChild(div);
    if (targetCityName == cities[key].name) {
        div.className = "target cityBox";
    }
    if (targetCityMax == cities[key].name) {
        div.className = "furthest cityBox";
        div.textContent = `${cities[key].name} ligger ${Math.floor(max/10)} mil bort`;
        furthest.textContent = cities[key].name;
    }
    if (targetCityMin == cities[key].name) {
        div.className = "closest cityBox";
        div.textContent = `${cities[key].name} ligger ${Math.floor(min/10)} mil bort`;
        closest.textContent = cities[key].name;
        
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
            let x = i - 1;
            let y = j;
            if(x == y) {
                cell.textContent = `0`
            }                       
                    //cell.textContent = `${i-1},${j}`;
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




