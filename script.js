// upper part
function loadDelhi() {
    console.log('Delhi function is working');

    var link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=32977ceffadad0ca3ac83a080bfee99e";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let obj = JSON.parse(this.response);

            document.getElementById('weather').innerHTML = obj.weather[0].description;
            document.getElementById('location').innerHTML = obj.name;
            document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
            document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        } else {
            console.log("Delhi data not available");
        }
    };

    request.send();
}

// downword part
// function loadJharkhand() {
//     console.log('Jharkhand function is working');

//     let newlink = "https://api.openweathermap.org/data/2.5/weather?q=Jharkhand&appid=32977ceffadad0ca3ac83a080bfee99e";
//     let newrequest = new XMLHttpRequest();
//     newrequest.open('GET', newlink, true);

//     newrequest.onload = function () {
//         if (newrequest.status >= 200 && newrequest.status < 400) {
//             let newobj = JSON.parse(this.response);

//             document.getElementById('n-weather').innerHTML = newobj.weather[0].description;
//             document.getElementById('n-location').innerHTML = newobj.name;
//             document.getElementById('n-temp').innerHTML = Math.round(newobj.main.temp - 273.15);
//             document.getElementById('n-icon').src = "https://openweathermap.org/img/w/" + newobj.weather[0].icon + ".png";
//         } else {
//             console.log("Jharkhand data not available");
//         }
//     };

//     newrequest.send();
// }


window.onload = function () {
    loadDelhi();
    // loadJharkhand();
};



document.getElementById('refresh').addEventListener('click', function (e) {
    e.preventDefault();   
    loadDelhi();   
});   

//nothing
