"use strict";

let wdbKeys;
let dom = require('./dom');


const searchDB = (query) => {
    return new Promise((resolve, reject) => {
        $.ajax(`api.openweathermap.org/data/2.5/forecast/daily?zip=37064`).done((data) => {
        		console.log("searchDB", data.results);
        		resolve(data.results);
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

const setKeys = (apiKey) => {
    wdbKeys = apiKey;
};

const showResults = (weatherArray) => {
    dom.domString(weatherArray);
};





module.exports = {setKeys, searchWeather};

// api.openweathermap.org/data/2.5/forecast/daily?zip=${37064},us&units=imperial&APPID=${wdbKeys}