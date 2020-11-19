# Weather_Dashboard
Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@guptaria 
 The password you provided is in a list of passwords commonly used on other websites. To increase your security, you must update your password. After October 14, 2020 we will automatically reset your password. Change your password on the settings page.

Read our documentation on safer password practices.

saltamay
/
weather-dashboard
1
0
2
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
weather-dashboard/README.md
@saltamay
saltamay Update README.md
Latest commit 054b32f on Oct 30, 2019
 History
 1 contributor
110 lines (68 sloc)  3.4 KB
  
weather-dashboard
Weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.

Table of Contents
About the Project
User Stories
Development Strategy
Demo
User Specifications
Extra Futures/Spefications
End Result
Getting Started
Tech Stack
Licence
About The Project
Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. This project will include building a weather dashboard using the OpenWeather API and/or DarkSky API as per user's spefications.

User Stories
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
Development Strategy
Use the OpenWeather API and/or DarkSky API to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

Use AJAX to hook into the API to retrieve data in JSON format.

App should be able to run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

Display the following under current weather conditions:

City
Date
Icon image (visual representation of weather conditions)
Temperature
Humidity
Wind speed
UV index
Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city.

Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

Date
Icon image (visual representation of weather conditions)
Temperature
Humidity
Demo
weather dashboard

User Specifications
 Fully functional, deployed application.

 GitHub repository with a unique name and a README describing the project.

 User can search for weather reports by city using the openweathermap API.

 After searching for a city, the following information is displayed:

Current temperature
Current humidity
Windspeed
Uv index
5 day forecast
 Application uses icons to represent weather conditions.

 Application stores previously searched for cities in localstorage and displays them to the user.

 Application loads last searched city forecast on page load.

Extra Futures/Spefications
 Use the Geolocation API to add the user's current location to the initial landing page.

 Use DarkSky API to get daily forecast

 Use Materialize CSS for UI

End Result
end result

Getting Started
Go to https://saltamay.github.io/weather-dashboard/ and start using 😊

Tech Stack
Fron-end: Materialize CSS
jQuery
Deployed on GitHub Pages
Licence
This project is licensed under the MIT License - see the LICENSE.md file for details

© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
