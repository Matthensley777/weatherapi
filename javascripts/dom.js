"use strict";

const domString = (weatherArray) => {
    console.log("weather array and dom string", weatherArray);
    let domString = "";
        domString += `<div class="col-sm-6 col-md-4">`;
        domString += `<div class="thumbnail">`;
        domString += `<p>${new Date ( weatherArray.list[0].dt)}</p>`;
        domString += `<p>Location: ${weatherArray.city.name}</p>`;
        domString += `<p>Tempature: ${weatherArray.list[0].temp.day}</p>`;
        domString += `<p>Description: ${weatherArray.list[0].weather[0].description}</p>`;
        domString += `<p>Wind Speed: ${weatherArray.list[0].speed}</p>`;
        domString += `</div>`;
        domString += `</div>`;
    
    console.log("domstring", domString);
    printToDom(domString);
};	

const threeDayDomString = (weatherArray) => {
    for (let i = 0; i < weatherArray.length; i++) {
    console.log("weather array and dom string", weatherArray);
    let domString = "";
        domString += `<div class="col-sm-6 col-md-4">`;
        domString += `<div class="thumbnail">`;
        domString += `<p>${new Date ( weatherArray.list[0].dt)}</p>`;
        domString += `<p>${weatherArray.city.name}</p>`;
        domString += `<p>${weatherArray.list[0].temp.day}</p>`;
        domString += `<p>${weatherArray.list[1].temp.day}</p>`;
        domString += `<p>${weatherArray.list[2].temp.day}</p>`;
        domString += `<p>${weatherArray.list[0].weather[0].description}</p>`;
        domString += `<p>${weatherArray.list[1].weather[0].description}</p>`;
        domString += `<p>${weatherArray.list[2].weather[0].description}</p>`;
        domString += `<p>${weatherArray.list[0].speed}</p>`;
        domString += `<p>${weatherArray.list[1].speed}</p>`;
        domString += `<p>${weatherArray.list[2].speed}</p>`;
        domString += `</div>`;
        domString += `</div>`;
    }
    console.log("threeDayDomString", threeDayDomString);
    printToDom(threeDayDomString);
};  

const fiveDayDomString = (weatherArray) => {
    for (let i = 0; i < weatherArray.length; i++) {
    console.log("weather array and dom string", weatherArray);
    let domString = "";
        domString += `<div class="col-sm-6 col-md-4">`;
        domString += `<div class="thumbnail">`;
        domString += `<p>${new Date ( weatherArray.list[0].dt)}</p>`;
        domString += `<p>${weatherArray.city.name}</p>`;
        domString += `<p>${weatherArray.list[0].temp.day}</p>`;
        domString += `<p>${weatherArray.list[0].weather[0].description}</p>`;
        domString += `<p>${weatherArray.list[0].speed}</p>`;
        domString += `</div>`;
        domString += `</div>`;
    }
    console.log("fiveDayDomString", fiveDayDomString);
    printToDom(fiveDayDomString);
};  

const printToDom = (strang) => {
    $("#weatherContainer").html(strang);
};

module.exports = {domString, threeDayDomString, fiveDayDomString};













































