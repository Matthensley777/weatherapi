"use strict";

let wdbKeys;
let dom = require('./dom');


const searchDB = (query) => {
    return new Promise((resolve, reject) => {
        $.ajax(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${query},us&units=imperial&APPID=${wdbKeys}`).done((data) => {
        	console.log("search", data);
        		resolve(data);
        }).fail((error) => {
        	reject(error);
        });
    });
};



const searchWeather = (query) => {
	searchDB(query).then((data) => {
		console.log("searchWeather", data);
		showResults(data);
	}).catch((error) => {
		console.log("error in search Weather", error);
	});
};

// const threeDay = (query) => {
//     searchDB(query).then((data) => {
//         console.log("searchWeather", data);
//         dom.threeDayDomString(data);
//     }).catch((error) => {
//         console.log("error in 3day Weather", error);
//     });
// };

// const fiveDay = (query) => {
//     searchDB(query).then((data) => {
//         console.log("searchWeather", data);
//         dom.fiveDayDomString(data);
//     }).catch((error) => {
//         console.log("error in 3day Weather", error);
//     });
// };

const setKeys = (apiKey) => {
    wdbKeys = apiKey;
};

const showResults = (weatherArray) => {
    dom.domString(weatherArray);
    dom.threeDayDomString(weatherArray);
    dom.fiveDayDomString(weatherArray);
};





module.exports = {searchWeather, setKeys};

