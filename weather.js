

const weatherTask=document.getElementById('weather');
const searchIn=document.getElementById('searchInput');
let myData='';
let forecastToday=[];
getData("cairo");


async function getData(a){
    let myResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    let myData=await myResponse.json();
    forecastToday=myData.forecast.forecastday;
    x=JSON.stringify(myData);
    x=JSON.parse(x)
    console.log(forecastToday);
    console.log(x);
    console.log(x.current.temp_c)
    showData();

}
searchIn.addEventListener('keyup',function(){
    getData(searchIn.value)
})


 
function showData(){
    divs='';

    divs+=` <div class="col-lg-4 one p-0 pb-2">
    <div class="head d-flex justify-content-between">
      <p>${forecastToday[0].date}</p>
      <p> today</p>
    </div>
    <div class="content p-3">
      <p class="city">${x.location.name}</p>
      <div>
        <p class="degree me-3">${x.current.temp_c}<sup class="text-white">o</sup>c</p>
        <img class='image' src="https://${x.current.condition.icon}" alt="">
      </div>
      <p class="status text-info">${x.current.condition.text}</p>

      <div class="per pt-3">
      <span class='me-4'><img class='me-2' src="image/icon-umberella.png" alt="">20%</span>
      <span class='me-4 text-lowercase'><img class='me-2' src="image/icon-wind.png" alt="">18km/h</span>
      <span class='me-4'><img class='me-2' src="image/icon-compass.png" alt="">east</span>
      </div>

    </div>
  </div>
  <div class="col-lg-4 two text-center">
    <div class="head2 text-center">
      <p>${forecastToday[1].date}</p>
      
    </div>
    <img class="forecast-icon mt-5 mb-4" src="http://${forecastToday[1].day.condition.icon}" alt="">
    <p class="f-degree">${forecastToday[1].day.maxtemp_c}<sup class="text-white">o</sup>c</p>
    <p>${forecastToday[1].day.mintemp_c}<sup>o</sup></p>
    <p class="status text-info">${forecastToday[1].day.condition.text}</p>
  </div>
  <div class="col-lg-4 three text-center">
    <div class="head2 text-center">
      <p>${forecastToday[2].date}</p>
      
    </div>
    <img class="forecast-icon mt-5 mb-4" src="http://${forecastToday[2].day.condition.icon}" alt="">
    <p class="f-degree">${forecastToday[2].day.maxtemp_c}<sup class="text-white">o</sup>c</p>
    <p>${forecastToday[2].day.mintemp_c}<sup>o</sup></p>
    <p class="status text-info">${forecastToday[2].day.condition.text}</p>
  </div>`
  weatherTask.innerHTML=divs;
}
