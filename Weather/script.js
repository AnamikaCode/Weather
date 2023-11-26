let city = document.getElementById("city")
let type = document.getElementById("type")
let temp= document.getElementById("temp")
let image = document.getElementById("img")
let input = document.getElementById("inp")
let API_Key="145d2d0a858c7da4b848688e466cc836"

const data= async function(search){
    let getData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`)
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="error1.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please Enter Write Location")
        image.src="error2.png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Cloud"){
        image.src="cloud.png"
    }else if(type.innerHTML == "Clear"){
        image.src="clear.png"
    }else if(type.innerHTML == "Rain"){
        image.src="rain.png"
    }else if(type.innerHTML == "Snow"){
        image.src="snow.png"
    }
    else if(type.innerHTML == "Smoke"){
        image.src="mist.png"
    }
    else if(type.innerHTML == "Haze"){
        image.src="haze.png"
    }
    else{
        image.src="cloud.png"

    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 
}