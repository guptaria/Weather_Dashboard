// Getting values stored in local storage
var cityArray = JSON.parse(localStorage.getItem("cities")) || [];
// method to get city name and give value of temp, humidity etc
var getCityWeather = function(cityName) {
    var city = $("#city");
    yourKey = "0ac03fde2ce68a22887f1b9d8af1d003";
    // URL  for current weather
    queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + yourKey + "&units=imperial";
    // empty the city and containerforecast jumbostron so that the current will not concatenate with the older one
    $("#city").empty();
    $("#containerForecast").empty();
    // ajax call
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        // console.log(queryURL1);
        // console.log(response);
        // Getting Today's Date from this method
        $(document).ready(function () {
            var Day = moment();
            var currentDay = $("#currentDay").text(Day.format("MMM Do YYYY"));
        })
        var h2El = $("<h2>");
        city.prepend(h2El);
        // displaying city name
        var currentName = response.name;
        // pushing the cities into the array
        cityArray.includes(currentName);
        if (!cityArray.includes(currentName)) {
            cityArray.push(currentName);
        }
        // Storing all the serched cities locally
        localStorage.setItem("cities", JSON.stringify(cityArray));
        // getting icon from object
        var image = (`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
        h2El.append(`${currentName} ${image}`);
        var result = response.main;
        // Appending the values to the elements
        city.append($("<p>").text(`Humidity:${result.humidity}%`));
        city.append($("<p>").text(`Temperature:${result.temp}°F`));
        city.append($("<p>").text(`Wind Speed:${response.wind.speed}MPH`));
        // longitude and latitude values to calculate UVI index
        var longitude = response.coord.lon;
        var lattitude = response.coord.lat;
        // URL for calculating UVI index
        queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?q=" + cityName + "&appid=" + yourKey + "&lon=" + longitude + "&lat=" + lattitude;

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log("This is for lattitude and longitude " + JSON.stringify(response));
            console.log(queryURL2);
            city.append($("<p>").text(`UV index ${response.value}`));
            console.log(response.value);
            // Setting the color of uvi index according to the value
            if (response.value < 2)
                $("p:last-child").css("background-color", "green").css("color", "white");
            else if (response.value < 3)
                $("p:last-child").css("background-color", "#ffff80").css("color", "black");
            else if (response.value > 3)
                $("p:last-child").css("background-color", "red");

        })
        // Querry URL for weather forecast
        var queryURL3 = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + yourKey + "&units=imperial";

        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL3);
            console.log(response);
            $("#containerForecast").append($("<h2>").text("5 Day Weather Forcast"));
            // This is the for loop to get the weather update daily
            for (var i = 4; i < 40; i += 8) {
                // setting up the card
                var card1 = $("<div>").addClass("col-md-2 bg-primary card");
                var cbody = $("<div>").addClass("card-body");
                var date = $("<h5>").addClass("card-title").text(`(${response.list[i].dt_txt})`);
                cbody.append(date);
                cbody.append(`<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">`);
                var temp = $("<h5>").addClass("card-title").text(`Temp:${response.list[i].main.temp}°F`);
                var humidity = $("<h5>").addClass("card-title").text(`Humidity:${response.list[i].main.humidity}%`);
                cbody.append(temp, humidity);
                // console.log(temp);
                card1.append(cbody);
                // console.log(card);
                // appending the card everytime into the containerForecast
                $("#containerForecast").append(card1);
            }
        })
    });
}
// This method is use to load the page with the information of the last searched city
var searchAfterPageLoad = function() {
    // Search for recent city if city exist in array of history
    if(cityArray.length > 0) {
        getCityWeather(cityArray[cityArray.length - 1]);
    }
}
// Event Listener
$(".button1").on("click", function (event) {
    event.preventDefault();

    var input_cityEl = $("#input_city").val();
    getCityWeather(input_cityEl);
});
// calling method
searchAfterPageLoad();

