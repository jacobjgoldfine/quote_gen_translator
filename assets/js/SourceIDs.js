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