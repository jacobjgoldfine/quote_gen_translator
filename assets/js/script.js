var dateInfo = document.getElementById("date_info");
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var state = document.getElementById("state");
var submitBtn = document.getElementById("submit_btn");
var nextBtn = document.getElementById("next_btn");
var resultName = document.getElementById("date_name");
var results = document.getElementById("criminal_container");
var errorPop = document.getElementById("error_modal");

function dataSubmit(event) {
  event.preventDefault();
}

function pullResults() {
  const queryURL = `https://www.jailbase.com/api/1/search/?source_id=${source_id}&first_name=${firstName}&last_name=${lastName}`;
  //check documentation for API
  $.ajax({
    url: queryURL,
    method: "GET",
    success: displayResult(data),
    // success: displayResult,
  });
}

function displayResult(data) {
  console.log(data);
  //append the results from API call to var results
}


submitBtn.addEventListener("click", gotoform2);

// function getSourceIds() {
//   const queryURL = "https://www.jailbase.com/api/1/sources/";
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//     success: function (data) {
//       console.log(data);
//       var stateArray = data.records;
//       for (i = 0; i < stateArray.length; i++) {
//         if (stateArray[i].state_full) {
//           console.log(stateArray[i].state_full);

//           stateName.text();
//         }
//       }
//       var countyArray = data.records;
//       for (i = 0; i < countyArray.length; i++) {
//         if (countyArray[i].name) {
//           console.log(countyArray[i].name);
//         }
//       }
//     },
//   });
// }

// PARSE the data
// (same as doing a for loop and looping over the array)
//response.records.map(function(whateveryouwant) {
// countyOffices.Alabama.push(office);
// countyOffices.Texas.push(office);
// countyOffices.Wisconsin.push(office);
// return countyOffices[whateveryouwant.state_full].push(whateveryouwant);
//})

// getSourceIds();

fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  },
  body: {
    q: "Hello, world!",
    target: "es",
    source: "en",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
