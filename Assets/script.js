
$(".button1").on("click", function (event) {
    event.preventDefault();
    var city = $("#city");
    var input_cityEl = $("#input_city").val();
    yourKey = "0ac03fde2ce68a22887f1b9d8af1d003";
    queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q=" + input_cityEl + "&appid=" + yourKey + "&units=imperial";

    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        // console.log(queryURL1);
        // console.log(response);

        $(document).ready(function () {
            var Day = moment();
            var currentDay = $("#currentDay").text(Day.format("MMM Do YYYY"));
        })
        var h2El = $("<h2>");
        // h2El.text(input_cityEl);
         city.prepend(h2El);
        var currentName=response.name;
       var image= (`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
        // city.prepend(h2El,image);
        h2El.append(`${currentName} ${image}`);

       
        localStorage.setItem("city", input_cityEl);
        var result = response.main;
        city.append($("<p>").text(`Humidity:${result.humidity}%`));
        city.append($("<p>").text(`Temperature:${result.temp}°F`));
        city.append($("<p>").text(`Wind Speed:${response.wind.speed}MPH`));
        var longitude = response.coord.lon;
        var lattitude = response.coord.lat;

        queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?q=" + input_cityEl + "&appid=" + yourKey + "&lon=" + longitude + "&lat=" + lattitude;

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log("This is for lattitude and longitude " + JSON.stringify(response));
            console.log(queryURL2);
            // var spanEl=$("<span>");
            city.append($("<p>").text(`UV index ${response.value}`));
            if (response.value < 2)
                p.css("background-color", "green");
            if (response.value < 3)
                $(this).css("color", "yellow");
            if (response.value > 3)
                $(this).css("color", "red");
                
            function uv(color) {
               
            }
        })
        var queryURL3 = "http://api.openweathermap.org/data/2.5/forecast?q=" + input_cityEl + "&appid=" + yourKey + "&units=imperial";

        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL3);
            console.log(response);
            $("#containerForecast").append($("<h2>").text("5 Day Weather Forcast"));

            for (var i = 4; i < 40; i += 8) {
                var card1 = $("<div>").addClass("col-md-2 bg-primary card");
                var cbody = $("<div>").addClass("card-body");
                var date = $("<h5>").addClass("card-title").text(`(${response.list[i].dt_txt})`);
                cbody.append(date);
                cbody.append(`<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@2x.png">`);
                var temp = $("<h5>").addClass("card-title").text(`Temp:${response.list[i].main.temp}°F`);
                var humidity = $("<h5>").addClass("card-title").text(`Humidity:${response.list[i].main.humidity}%`);
                cbody.append(temp, humidity);
                // console.log(temp);
                card1.append(cbody);
                // console.log(card);
                $("#containerForecast").append(card1);
            }
        })
    })
})




// $("#dt_txt").append($("<p>").text(response.list[i].dt_txt));
                // $("#forecast").append($("<p>").text(`Temperature is ${response.list[i].main.temp}`));
                // $("#forecast").append($("<p>").text(`Humidity is ${response.list[i].main.humidity}`));
                // $("#forcast").append (dt_txt);
                // $("#containerForecast").append(forecast);
            // var history=[]; 

            // var h2El = $("<h2>");
            // h2El.text(input_cityEl);
            // city.append(h2El);
            //  localStorage.setItem("city", input_cityEl);
            // var result = response.;
            // console.log(response.list[0]);







// for(var i=0;i<history.length;i++){
    //    history[history.length] = history.push(input_cityEl);
    // console.log("History array "+ history[i]);
    // localStorage.setItem("city", input_cityEl);
    // $(`#${dateArray[i]}`).append(localStorage.getItem("city"));
    // }