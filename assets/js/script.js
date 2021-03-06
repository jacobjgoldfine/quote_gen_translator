 var nextBtn = document.getElementById("next_btn");
 var cancelBtn= document.getElementById("cancel_btn");
 var searchAgainBtn= document.getElementById ("searchAgainBtn")
 var dropDown = document.getElementById("langDrop");
 var cancelBtn= document.getElementById("cancel_btn");
 var error = document.getElementById("error_modal");
 var langDrop= document.getElementById("langDrop");
 var formlanguage= document.getElementById("formLanguage");
 var emptySelection= document.getElementById("EmptySelection");
 var storedQuote= document.getElementById("og-Quote")
 var storedAuthor= document.getElementById("og-author")
 var storedTranslation= document.getElementById("tr-Quote")
 var storedTranslatedAuthor = document.getElementById("tr-author")

//takes to the result display page
 function gotoTranslated(event) {
  event.preventDefault();
   var selectedValue = langDrop.options[langDrop.selectedIndex].value
   if (selectedValue === ""){
    error.classList.add("shown");
    error.classList.remove("hide");
    return;
   }else {
    error.classList.add("hide");
    error.classList.remove("shown");
    document.getElementById("form").classList.add("hide");
    document.getElementById("results-page").classList.remove("hide"); 
    getQuote()
   }

  }

//ADDING THE QUOTE TO THE PAGE 
var quoteEl = $('#next_btn');

function getQuote() {
  const queryURL = 'https://free-quotes-api.herokuapp.com/';
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function(data){
      var ogQuote = $("#og-Quote")//add quote area ID
      ogQuote.append(data.quote)
      var ogAuthor =$("#og-author")
      ogAuthor.append("~"+data.author)
      var trAuthor= $("#tr-author")
      trAuthor.append("~"+data.author)
      translateQuote(data.quote)
      localStorage.setItem("quote", data.quote)
      localStorage.setItem("author", data.author)
    }
  })
}

//makes api call to translate quote and add to the page
function translateQuote(quote) {
var langCode = langDrop.options[langDrop.selectedIndex].id
console.log(langCode);
fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${langCode}`, {
  method: "POST",
  headers: {
    "Ocp-Apim-Subscription-Key": "5377b25d2ec94e7aa99cd9209862184f",
    "Ocp-Apim-Subscription-Region": "eastus",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify([
    {"Text": quote}
]),
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    for(var prop in response){
      console.log(response[prop].translations[prop].text);
      var translatedQuote = response[prop].translations[prop].text;
      var transQuoteHolder = document.getElementById("tr-Quote");

      transQuoteHolder.append(translatedQuote);
      localStorage.setItem("translatedQuote", response[prop].translations[prop].text);
    };
  })
  .catch((err) => {
    console.error(err);
  });
}

//hides error modal
function hideme(event){
  event.preventDefault();
  document.getElementById("error_modal").classList.remove("shown");
  document.getElementById("error_modal").classList.add("hide");
  localStorage.clear()
}

//resets the page when you hit the search again Btn
function clear(event){
  event.preventDefault();
  document.getElementById("form").classList.remove("hide");
  document.getElementById("results-page").classList.add("hide");
  localStorage.clear()
}

//CLEARING THE OLD QUOTES AND AUTHORS
$(document).ready(function(){
  $(searchAgainBtn).click(function(){
  $("#og-Quote").empty();
  $("#og-author").empty();
  $("#tr-author").empty();
  $("#tr-Quote").empty();
  });
});

//Clears Quotes generated when the modal is open.
$(document).ready(function(){
  $(cancelBtn).click(function(){
  $("#og-Quote").empty();
  $("#og-author").empty();
  $("#tr-author").empty();
  $("#tr-Quote").empty();
  });
});

//if local storage then displays it
function showLocalStorage(){
  if(localStorage.getItem("quote") !== null)
    showStoredQuote()
  };

function showStoredQuote() {
    document.getElementById("form").classList.add("hide");
    document.getElementById("results-page").classList.remove("hide");  
    var recentQuote = localStorage.getItem("quote");
    storedQuote.innerText= recentQuote
    var recentAuthor = localStorage.getItem("author");
    storedAuthor.innerText = ("~"+ recentAuthor);
    var recentTranslation = localStorage.getItem("translatedQuote");
    storedTranslation.innerText = recentTranslation;
    storedTranslatedAuthor.innerText = ("~"+ recentAuthor);
};

//gets the object of languages and langCodes to populate the dropdown
function getLang(){
  fetch("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0", {
    method: "GET",
  })
.then((response) => {
  return response.json();
})
.then((response) => {
  var languages = response.translation
  for(var prop in languages){
    var createOption = document.createElement('option');

    createOption.textContent = languages[prop].name
    createOption.setAttribute("id", prop)
    
    dropDown.appendChild(createOption);
  };
  }
)
.catch((err) => {
  console.error(err);
});
}

//buttons
formLanguage.addEventListener("submit", gotoTranslated);
cancelBtn.addEventListener("click", hideme)
searchAgainBtn.addEventListener("click", clear)

//gets languages on startup
getLang();

//if there is local storage, runs this function and goes to display it
showLocalStorage();