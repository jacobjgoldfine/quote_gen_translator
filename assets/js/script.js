var dateInfo = document.getElementById("date_info");
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var state = document.getElementById("state");
var nextBtn = document.getElementById("next_btn");
var submitBtn2 = document.getElementById("submit_btn2");
var resultName = document.getElementById("date_name");
var results = document.getElementById("criminal_container");
var errorPop = document.getElementById("error_modal");


function gotoTranslated(event) {
  event.preventDefault();
  console.log("clicked")
  document.getElementById("form").classList.add("hide");
  document.getElementById("results-page").classList.remove("hide"); 
  // dataSubmit();
}

nextBtn.addEventListener("click", gotoTranslated);
submitBtn2.addEventListener("click", gotoSearchResults);

//ADDING THE QUOTE TO THE PAGE 
var quoteEl = $('#submit_btn');

function getQuote() {
  const queryURL = 'https://free-quotes-api.herokuapp.com/';
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function(data){
      console.log(data)
      console.log(data.quote + data.author)
      var quote = $("#og-Quote")//add quote area ID
      quote.append(data.quote + " - " + data.author)
      translateQuote(data.quote)
    }
  })
}

function translateQuote(quoteContent) {
  //ToDo: need language code variable pulled in from another API call 
  var langCode = 
  fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${langCode}`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": "5377b25d2ec94e7aa99cd9209862184f",
      "Ocp-Apim-Subscription-Region": "eastus",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify([
      {"Text": quoteContent}
  ]),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });  
}

// function displayResult(data) {
//   console.log(data);
//   append the results from API call to var results
// }

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

quoteEl.click(getQuote);

var ogQuote = localStorage.getItem();

// function getquote() {
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
