// var dateInfo = document.getElementById("date_info");
// var firstName = document.getElementById("first_name");
// var lastName = document.getElementById("last_name");
// var state = document.getElementById("state");
 var nextBtn = document.getElementById("next_btn");
 var cancelBtn= document.getElementById("cancel_btn")
// var submitBtn2 = document.getElementById("submit_btn2");
// var resultName = document.getElementById("date_name");
// var results = document.getElementById("criminal_container");
// var errorPop = document.getElementById("error_modal");

// console.log(lastName);

 function gotoTranslated(event) {
   event.preventDefault();
   console.log("clicked")
   document.getElementById("form").classList.add("hide");
   document.getElementById("results-page").classList.remove("hide"); 
//   // dataSubmit();
 }

// function pullResults() {
//   const queryURL = `https://www.jailbase.com/api/1/search/?source_id=${source_id}&first_name=${firstName}&last_name=${lastName}`;
//   //check documentation for API
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//     success: displayResult(data),
//     success: displayResult,
//   });
// }

function displayResult(data) {
  console.log(data);
  //append the results from API call to var results
}

//ADDING THE QUOTE TO THE PAGE 
var quoteEl = $('#next_btn');

function getQuote() {
  const queryURL = 'https://free-quotes-api.herokuapp.com/';
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function(data){
      console.log(data)
      console.log(data.quote + data.author)
      var ogQuote = $("#og-Quote")//add quote area ID
      ogQuote.append(data.quote)
      var ogAuthor =$("#og-author")
      ogAuthor.append("~"+data.author)
      var trAuthor= $("#tr-author")
      trAuthor.append("~"+data.author)
    }
  })
}

quoteEl.click(getQuote);

function hideme(event){
  event.preventDefault();
  document.getElementById("error_modal").classList.add("hide");
}
//var ogQuote = localStorage.getItem();

nextBtn.addEventListener("click", gotoTranslated);
cancelBtn.addEventListener("click", hideme)
//submitBtn2.addEventListener("click", gotoSearchResults);


// PARSE the data
// (same as doing a for loop and looping over the array)
//response.records.map(function(whateveryouwant) {
// countyOffices.Alabama.push(office);
// countyOffices.Texas.push(office);
// countyOffices.Wisconsin.push(office);
// return countyOffices[whateveryouwant.state_full].push(whateveryouwant);
//})

