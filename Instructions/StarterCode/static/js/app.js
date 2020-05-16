// from data.js
let tableData = data;

// Reference to the table body
let tbody = d3.select("tbody");
console.log(tableData);

// Create array of column names
let columnns = ["datetime", "city", "state", "country", "shape", "comments"]

// Loop through the array of data and append to the table
function createTable(){
    tableData.forEach(aliens =>{
        let row = tbody.append("tr")
        columnns.forEach(column => {
            if(column == "city" || column == "state" || column == "country"){
                row.append("td").text(aliens[column].toUpperCase())
            }
            else row.append("td").text(aliens[column])
        })
    })
}
// Load Data
createTable()

// Create filter function
function filterData(){
    let dateFilter = inputDate.property("value")
    let cityFilter = inputDate.property("value")
    let stateFilter = inputState.property("value")
    let countryFilter = inputCountry.property("value")
    let shapeFilter = inputShape.property("value")
}

// Reference to inputs (Level 2)
let inputDate = d3.select("#datetime");
let inputCity = d3.select("#city");
let inputState = d3.select("state");
let inputCountry = d3.select("#country");
let inputShape = d3.select("#shape")
