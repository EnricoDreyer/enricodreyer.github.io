const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const steam_api_url = 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=C39C385409EED377E242D4B58BAD32E1&steamid=76561198261417763&format=json&count=3';                    
const weather_api_url = 'http://api.openweathermap.org/data/2.5/weather?q=Gauteng,Vanderbijlpark&appid=c3c33bd8270ae6d14f1e19d0c354a2d6&units=metric';

async function getAchiev()
    { 
        const response = await fetch(proxyurl + steam_api_url);
        const data = await  response.json();

        var name1 = data.response.games[0].name;
        var name2 = data.response.games[1].name;
        var name3 = data.response.games[2].name;
                    
        var logoUrl1 = "http://media.steampowered.com/steamcommunity/public/images/apps/" + data.response.games[0].appid + "/" + data.response.games[0].img_logo_url + ".jpg";
        var logoUrl2 = "http://media.steampowered.com/steamcommunity/public/images/apps/" + data.response.games[1].appid + "/" + data.response.games[1].img_logo_url + ".jpg";
        var logoUrl3 = "http://media.steampowered.com/steamcommunity/public/images/apps/" + data.response.games[2].appid + "/" + data.response.games[2].img_logo_url + ".jpg";

        var hoursPlayed1 = Math.round(data.response.games[0].playtime_forever/60);
        var hoursPlayed2 = Math.round(data.response.games[1].playtime_forever/60);
        var hoursPlayed3 = Math.round(data.response.games[2].playtime_forever/60);                   

        document.getElementById("lastPlayedUrl1").src = logoUrl1;
        document.getElementById("lastPlayedTitle1").innerHTML = name1;
        document.getElementById("lastPlayedHours1").innerHTML = hoursPlayed1;  

        document.getElementById("lastPlayedUrl2").src = logoUrl2;
        document.getElementById("lastPlayedTitle2").innerHTML = name2;
        document.getElementById("lastPlayedHours2").innerHTML = hoursPlayed2;

        document.getElementById("lastPlayedUrl3").src = logoUrl3;
        document.getElementById("lastPlayedTitle3").innerHTML = name3;
        document.getElementById("lastPlayedHours3").innerHTML = hoursPlayed3;                                 
    }

getAchiev();

function init()
{
    async function getWeather()
    { 
        const response = await fetch(proxyurl + weather_api_url);
        const data = await response.json();

        var mainWeather = data.weather[0].main;
        var temperature = data.main.temp;
        var humidity = data.main.humidity;                                                          

        document.getElementById("mainweather").innerHTML = mainWeather;  
        document.getElementById("temperature").innerHTML = temperature;
        document.getElementById("humidity").innerHTML = humidity;                                 
    }
    
    getWeather();
}

window.onload = init;


