var dateInfo = document.getElementById("date_info");
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var crime = document.getElementById("crime");
var local = document.getElementById("location");
var submitBtn = document.getElementById("submit_btn");
var nextBtn= document.getElementById("next_btn")
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
submitBtn.addEventListener("click", gotoform2)

function gotoform2(){
  document.getElementById("form-1").classList.add("hide");
  document.getElementById("form-2").classList.remove("hide") //Todo: figure out why this is showing for .2 seconds and then going away
  dataSubmit;
}

const countyOffices =  {
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
  // fetch the data
  const queryURL = "https://www.jailbase.com/api/1/sources/";
  //check documentation for API
  $.ajax({
      url:queryURL,
      method:"GET", 
      success:function(data){
        console.log(data);
        var stateArray= data.records
        for (i=0; i < stateArray.length; i++){
          if(stateArray[i].state_full){
            console.log(stateArray[i].state_full)
          9
          
            stateName.text()
          }
        }
        var countyArray= data.records
        for (i=0; i < countyArray.length; i++){
          if(countyArray[i].name){
            console.log(countyArray[i].name)
          }
        }  
        
      }
    })
  };



  // PARSE the data
  // (same as doing a for loop and looping over the array)
//response.records.map(function(whateveryouwant) {
    // countyOffices.Alabama.push(office);
    // countyOffices.Texas.push(office);
    // countyOffices.Wisconsin.push(office);
   // return countyOffices[whateveryouwant.state_full].push(whateveryouwant);
 //})