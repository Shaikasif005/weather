//http://api.weatherapi.com/v1/current.json?key=c71103b11f3a4028869152601250204&q=mumbai&aqi=no
//http://api.weatherapi.com/v1/current.json?key=c71103b11f3a4028869152601250204&q=${targetLocation}&aqi=no`;

const temperatureField = document.querySelector('.temp');
const locationField =document.querySelector(".time-location p");
const dataandTimeField = document.querySelector(".time-location");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const form = document.querySelector('form');
const city = document.querySelector('.city')

form.addEventListener('submit',searchForLocation);
let target="mumbai"

const fetchResults= async (targetLocation)=>{
    let url=`
http://api.weatherapi.com/v1/current.json?key=c71103b11f3a4028869152601250204&q=${targetLocation}&aqi=no`;

    const res= await fetch(url)
    
    const data= await res.json();

    console.log(data)

    let locationName=data.location.name;
    let time=data.location.localtime;
    let temp=data.current.temp_c;
    let condition=data.current.condition.text;
    updateDetails(temp,locationName,time,condition,)
     

    
}
function updateDetails(temp,locationName,time,condition,){
    temperatureField.innerText=temp;
    locationField.innerText=locationName;
    dataandTimeField.innerText=time;
    conditionField.innerText=condition;
    city.innerText=searchField.value

}

function searchForLocation(e){
    e.preventDefault()
    target= searchField.value;
    fetchResults(target)

}
fetchResults(target);
