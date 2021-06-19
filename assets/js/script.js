 var nextBtn = document.getElementById("next_btn");
 var cancelBtn= document.getElementById("cancel_btn");
 var dropDown = document.getElementById("langDrop");
 var cancelBtn= document.getElementById("cancel_btn");
 var error = document.getElementById("error_modal");
 var langDrop= document.getElementById("langDrop");
 var formlanguage= document.getElementById("formLanguage");
 var emptySelection= document.getElementById("EmptySelection");


 function gotoTranslated(event) {
   event.preventDefault();
   console.log("clicked")
   var selectedValue = langDrop.options[langDrop.selectedIndex].value
  console.log(selectedValue)
   if (selectedValue === ""){
     error.classList.add("shown")
     error.classList.remove("hide")
   }else{
     error.classList.add("hide")
     error.classList.remove("shown")
     document.getElementById("form").classList.add("hide");
     document.getElementById("results-page").classList.remove("hide");  
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
      console.log(data)
      console.log(data.quote + data.author)
      var ogQuote = $("#og-Quote")//add quote area ID
      ogQuote.append(data.quote)
      var ogAuthor =$("#og-author")
      ogAuthor.append("~"+data.author)
      var trAuthor= $("#tr-author")
      trAuthor.append("~"+data.author)
      translateQuote(data.quote)
    }
  })
}

function translateQuote(quote) {
var langCode = document.getElementsByTagName("option".id);
console.log(langCode);
fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${langCode}`, {
  method: "POST",
  headers: {
    "Ocp-Apim-Subscription-Key": "5377b25d2ec94e7aa99cd9209862184f",
    "Ocp-Apim-Subscription-Region": "eastus",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: [
    {"Text": quote}
],
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

quoteEl.click(getQuote);

function hideme(event){
  event.preventDefault();
  document.getElementById("error_modal").classList.remove("shown");
  document.getElementById("error_modal").classList.add("hide");
}

//var ogQuote = localStorage.getItem();

formLanguage.addEventListener("submit", gotoTranslated);
cancelBtn.addEventListener("click", hideme)


function getLang(){
  fetch("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0", {
    method: "GET",
  })
.then((response) => {
  return response.json();
})
.then((response) => {
  // console.log(response.translation);
  var languages = response.translation
  console.log(languages);
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

getLang();
