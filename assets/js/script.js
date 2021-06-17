var dateInfo = document.getElementById("date_info");
var firstName = document.getElementById("first_name").value;
var lastName = document.getElementById("last_name").value;
var state = document.getElementById("state").value;
var submitBtn = document.getElementById("submit_btn");
var resultName = document.getElementById("date_name");
var results = document.getElementById("criminal_container");
var errorPop = document.getElementById("error_modal");

console.log(lastName);

// Jailbase API

// Here is the link to the documentation
// https://www.jailbase.com/api/
// There are multiple methods, but the only one I think we will need is the search one.

// Request from https://www.jailbase.com/api/1/search/?last_name= "Name search"

// Last name is required.
// We could also add first name, state, and county to the search form

// jailbase API calls needed
// call for State and County to get source_id first API call
// use that source_id in search for person second API call
// then add a function to break the crime into an array, search for keywords

//add drop down menu to var crime via tailwind or jquerry, list keywords in array for crimes
function mapSelect() {
  //if we need to use a function for the map API
}
function dataSubmit(event) {
  event.preventDefault();

  var newForm = $("form");
  countyOffices[loc].map((office) => {
    var newRadio = $("input");
    newRadio.setAttr("type");

    var newEl = $("div");
    var newHeader = $("h1");
    newHeader.textContent(office.name);
    newEl.append(newHeader);
    // do some other stuff
    $("theElementWhereYouWantToPutThis").append(newEl);
  });
  //function to run when hit the submitBtn, pulls form data for APIcall
}

function countySubmit() {
  //add the county form submit based on state
  //pull sourceID, pass on
}

function pullResults() {
  //do a second API call with source ID put into local storage
  const queryURL = `https://www.jailbase.com/api/1/search/?source_id=${source_id}&first_name=${firstName}&last_name=${lastName}`;
  //check documentation for API
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (data) {
      console.log(data);
    },
    displayResult(data);
});
};

function displayResult() {
  //append the results from API call to var results
};

submitBtn.addEventListener("click", dataSubmit);

const countyOffices = {
  Alabama: [],
  Alaska: [],
  Arizona: [],
  Arkansas: [],
  California: [],
  Colorado: [],
  Connecticut: [],
  Florida: [],
  Goergia: [],
  Idaho: [],
  Illinois: [],
  Indiana: [],
  Iowa: [],
  Kansas: [],
  Kentucky: [],
  Louisiana: [],
  Maryland: [],
  Michigan: [],
  Minnesota: [],
  Mississippi: [],
  Missouri: [],
  Montana: [],
  Nebraska: [],
  Nevada: [],
  New_Jersey: [],
  New_Mexico: [],
  New_York: [],
  North_Carolina: [],
  North_Dakota: [],
  Ohio: [],
  Oklahoma: [],
  Oregon: [],
  Pennsylvania: [],
  South_Carolina: [],
  South_Dakota: [],
  Tennesse: [],
  Texas: [],
  Utah: [],
  Virginia: [],
  Washington: [],
  West_Virginia: [],
  Wisconsin: [],
  Wyoming: [],
};

window.onload = function getSourceIds() {
  const queryURL = "https://www.jailbase.com/api/1/sources/";
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (data) {
      console.log(data);
    },
  });
};

// PARSE the data
// (same as doing a for loop and looping over the array)
//response.records.map(function(whateveryouwant) {
// countyOffices.Alabama.push(office);
// countyOffices.Texas.push(office);
// countyOffices.Wisconsin.push(office);
// return countyOffices[whateveryouwant.state_full].push(whateveryouwant);
//})
