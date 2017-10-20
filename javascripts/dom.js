"use strict";

const domString = (weatherArray) => {
    console.log(weatherArray);
    let domString = "";
    for (let i = 0; i < weatherArray.length; i++) {
        domString += `<p>${weatherArray[i].city.name}</p>`;
        domString += `<p>${weatherArray[i].list.temp.day}</p>`;
        domString += `<p>${weatherArray[i].list.weather.description}</p>`;
        domString += `<p>${weatherArray[i].list.speed}</p>`;
    }
    printToDom(domString);
};



const printToDom = (strang) => {
    $("#container").append(strang);
};

module.exports = {
    domString
};