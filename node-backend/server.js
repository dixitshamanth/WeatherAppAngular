const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var path = require('path');
// const https = require('https')
const fetch = require('node-fetch')
let tomorrow_api_key = "uL5FueYDKUfShSBspuoiCeWbvkuHG6VZ";
let geolocation_api_key = "AIzaSyCU_5v_FyBbMA43fyyC-Exc4PujUg__D6w";


const app = express()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (request, response) {
    response.send("WORKS")
})

app.get("/search", async function (request, responseAPI) {


    let autoLocation = request.query.autoLocation
    if (autoLocation == "on") {
        myLocation = request.query.coord;
        let formatted_address = "";

    }
    else {

        try {

            let street = request.query.street.toString()
            let city = request.query.city.toString()
            let state = request.query.myState.toString()
            var fullAddress = street.replace(
                " ", "+") + "+" + city.replace(" ", "+") + "+" + state;
        }
        catch (e) {
            console.log(e)
        }

        const options = {
            method: 'GET'
        }

        let geocodeurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + fullAddress + "&key=" + geolocation_api_key

        var geoResult;
        var myLocation;
        var formatted_address;

        await fetch(geocodeurl)
            .then(response => response.json())
            .then(data => geoResult = data)
            .then(() => {
                let lat = geoResult.results[0].geometry.location.lat.toFixed(4);
                let long = geoResult.results[0].geometry.location.lng.toFixed(4);
                myLocation = lat + "," + long;
                formatted_address = geoResult.results[0].formatted_address.toString();
            });

        console.log(formatted_address)
        console.log(myLocation)
    }
    let tomorrowUrl = "https://api.tomorrow.io/v4/timelines?location=" +
        myLocation + "&fields=temperature,temperatureApparent,temperatureMin,temperatureMax,windSpeed,windDirection,humidity,pressureSeaLevel,uvIndex,weatherCode,precipitationProbability,precipitationType,sunriseTime,sunsetTime,visibility,moonPhase,cloudCover&timesteps=1d,1h&units=imperial&timezone=America/Los_Angeles&apikey="
        + tomorrow_api_key;
    let weather_values = [];
    let firstArray = [];
    let secondArray = [];

    const tomorrowResponse = await fetch(tomorrowUrl);

    let statusCode = tomorrowResponse.ok

    const tomorrowData = await tomorrowResponse.json();

    if (statusCode) {
        tomorrowData.data.timelines[0].intervals.forEach(element => {
            element.values.Date = element.startTime
            element.values.myAddress = formatted_address;
            weather_values.push(element.values);
            // })
            // firstArray = sorted(weather_values, key = lambda x: x["Date"])
            firstArray = weather_values
            secondArray = tomorrowData.data.timelines[1].intervals;
        })
    }

    let apiResponse = [firstArray, secondArray, statusCode, myLocation]


    responseAPI.send(apiResponse);

}

)

app.listen(process.env.PORT || 3000, function () {
    console.log("Server up and running")
})
