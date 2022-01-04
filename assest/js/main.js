let child =document.getElementById("child");
let city = prompt("Please enter a city name : ");
const url = `http://api.weatherapi.com/v1/current.json?key=fe01e6dc4db14be1abe204103220101&q=${city}&aqi=no`;
let myHttp = new XMLHttpRequest();
myHttp.onreadystatechange=function(){
        if(city==null || city==""){
                alert("Please enter a city name :");
                location.reload(true);
        }else
            if(myHttp.readyState == 4 && myHttp.status == 200){
                let data =JSON.parse(myHttp.responseText);
                let country = data.location.country;
                let name = data.location.name;
                let temp_c = data.current.temp_c;
                let temp_f = data.current.temp_f;
                let last_updated= data.current.last_updated;
                let localtime = data.location.localtime;
                child.innerHTML=`
                <div class="new">
        <h2>${name}</h2>
        <hr>
        <h3>country : <span class="span">${country}</span></h3>
        <h3>temp_c : <span class="span">${temp_c}</span></h3>
        <h3>temp_f : <span class="span">${temp_f}</span></h3>
        <h3>last updated : <span class="span">${last_updated}</span></h3>
        <h3>local time : <span class="span">${localtime}</span></h3>
        </div>        
       `;
   }
        }
myHttp.open("GET",url);
myHttp.send();


