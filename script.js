//create an input box and a submit button using html
//ensure the submit box works by console logging
//create two divs to display the target information-- one to display todays forcast and one for the five day forcast
//create 5 cards inside the second div using bootstrap-- using a for loop, add target elements information into each card
//create a 3rd div that stores is run by local storage 



var test = $("#button").on("click", function(){
var input = $("#txt").val()
console.log((input))
let today = new Date().toLocaleDateString()

console.log(today)


var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + input + "&appid=88fb228c5c265d1bc1c78056807b8f2a" ;

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response)
    // console.log(response.city.name)
    // $(".display").text(JSON.stringify(response.list[0].dt_txt + response.city.name))
    var cityName = $("<h1>").attr("class","card-title")
    var currentTemp = $("<p>").attr("class","card-text")
    var currentHumid = $("<p>").attr("class","card-text")
    var currentWind = $("<p>").attr("class","card-text")
    var currentUV = $("<p>").attr("class","card-text")

    var body = $("<div>").attr("class","card-body")


    //get values for each variable using the object
    cityName.text(response.city.name+"("+today+")")
    currentTemp.text("Temperature: "+ response.list[0].main.feels_like)
    currentHumid.text("Humidity: "+ response.list[0].main.humidity)
    currentWind.text("Wind Speed: "+ response.list[0].wind.speed)
    //append to the col div 

    $("#main").append(cityName).append(currentTemp).append(currentHumid).append(currentWind)


    var i;
for (i = 0; i < 5; i++) { 

    var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1+i);


   
   var day1CityName = $("<h1>").attr("class","card-title")
    var day1CurrentTemp = $("<p>").attr("class","card-text")
    var day1CurrentHumid = $("<p>").attr("class","card-text")

    var body1 = $("<div>").attr("class","card-body")


    day1CityName.text(currentDate)
    day1CurrentTemp.text("Temperature: "+ response.list[1+i].main.feels_like)
    day1CurrentHumid.text("Humidity: "+ response.list[1+i].main.humidity)
    $("#day1").append(currentDate).append(day1CurrentTemp).append(day1CurrentHumid)
}
    
  }) })

  //target information for div 1: The city name, the date, the temperature, the humidity, the windspeed, the UV index 



  //create a for loop on the page load with each element stored in local storage, if there is a history pull up most recent search 
  //when loads get previous history items from local storage, parse them, assign them a variable, 