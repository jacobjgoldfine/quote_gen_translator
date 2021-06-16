var dateInfo = document.getElementById("date_info");
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var crime = document.getElementById("crime");
var local = document.getElementById("location");
var submitBtn = document.getElementById("submit_btn");
var resultName = document.getElementById("date_name");
var results = document.getElementById("criminal_container");
var errorPop = document.getElementById("error_modal");

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
  const loc = $('select[name="location"]').val();
  console.log('FORM SUBMIT:', loc)

  const newForm = $('form');
  countyOffices[loc].map(office => {
    const newRadio = $('input');
    newRadio.setAttr('type')
    
    const newEl = $('div');
    const newHeader = $('h1');
    newHeader.textContent(office.name);
    newEl.append(newHeader)
    // do some other stuff
    $('theElementWhereYouWantToPutThis').append(newEl)
  });
  //function to run when hit the submitBtn, pulls form data for APIcall
  //get the state and county source_id here, pass into next function along with the name and crime
}

function crimeSearch() {
  //run the second API call, get person info
  //break the crime listed in the object down into an array
  //compare array to our crime data entry if submited
  //pass all matches onto next function
  //add to local storage
}
function displayResult() {
  //append the results from API call to var results
}
submitBtn.addEventListener("click", dataSubmit);


const countyOffices =  {
  Alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
  alabama: [],
};
function getSourceIds() {
  // fetch the data


  // PARSE the data
  // (same as doing a for loop and looping over the array)
  response.records.map(function(whateveryouwant) {
    // countyOffices.Alabama.push(office);
    // countyOffices.Texas.push(office);
    // countyOffices.Wisconsin.push(office);
    return countyOffices[whateveryouwant.state_full].push(whateveryouwant);
  });
}

getSourceIds();