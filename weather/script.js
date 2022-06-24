let weather = {
    apiKey: "cb21080a7c5cf03bd3a0306856e0ef3a",
    getWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city + 
        "&appid=cb21080a7c5cf03bd3a0306856e0ef3a&units=metric")
        .then (response=> response.json())
        .then (data=>this.shoWeather(data))
    },
    shoWeather: function(data){
        const { name } = data;
        const { speed } = data.wind;
        const { temp, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const { country } = data.sys;

        document.querySelector(".header").innerHTML = " " + name;
        document.querySelector(".country").innerHTML= "" + country;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"
        + icon + ".png";
        document.querySelector(".description").innerText = "" + description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerText = "Wind Speed: " + speed + "km/h";

    },
    search: function(){
        this.getWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-bar-con button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        weather.search();
    }
});
weather.getWeather("Nairobi");