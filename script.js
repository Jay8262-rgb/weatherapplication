   //upper part
        link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=32977ceffadad0ca3ac83a080bfee99e"
        var request = new XMLHttpRequest;
        request.open('GET',link,true);
        request.onload = function(){
            var obj = JSON.parse(this.response);
            console.log(obj);
            document.getElementById('weather').innerHTML=obj.weather[0].description;
            document.getElementById('location').innerHTML = obj.name;
            document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
            document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png"; 
        }

        if(request.status>=200 && request.status < 400){
            var temp=obj.main.temp;
        }
        else{
            console.log("The city data are not present yet");
        }
        request.send();

        //downword part
        newlink = "https://api.openweathermap.org/data/2.5/weather?q=Jharkhand&appid=32977ceffadad0ca3ac83a080bfee99e"
        var newrequest = new XMLHttpRequest;
        newrequest.open('GET',newlink,true);
        newrequest.onload = function(){
            var newobj = JSON.parse(this.response);
            console.log(newobj);
            document.getElementById('n-weather').innerHTML=newobj.weather[0].description;
            document.getElementById('n-location').innerHTML = newobj.name;
            document.getElementById('n-temp').innerHTML = Math.round(newobj.main.temp - 273.15);
            document.getElementById('n-icon').src = "https://openweathermap.org/img/w/" + newobj.weather[0].icon + ".png"; 
        }

        if(newrequest.status>=200 && newrequest.status < 400){
            var newtemp=newobj.main.temp;
        }
        else{
            console.log("The city data are not present yet");
        }
        newrequest.send();
        