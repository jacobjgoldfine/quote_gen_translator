fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=de", {
  method: "POST",
  headers: {
    "Ocp-Apim-Subscription-Key": "5377b25d2ec94e7aa99cd9209862184f",
    "Ocp-Apim-Subscription-Region": "eastus",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify([
    {"Text": "Test this"}
]),
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


  