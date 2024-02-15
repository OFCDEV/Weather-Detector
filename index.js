const apiKey = "d9a4372ea6724dc9bd7a0dfb5452374f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//When we enter a city name and press the icon it'll send data to searchBox variable
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`); //fetch the required data

    //Error handling
    if(respone.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }
    else{
        var data = await respone.json(); //converts data into json
    // console.log(data);

    //Changing info according to userInput
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    //updating the weather img

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
    
}

//Adding a event listner to the button:

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})//It will give the city name in the input field and pass the value in the function