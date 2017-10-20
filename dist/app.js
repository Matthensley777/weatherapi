(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const wdb = require('./db');


const apiKeys = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			console.log("apiKeys", data.apiKeys);
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		wdb.setKeys(results.wdb.apiKey);
		console.log("retrieveKeys", results.wdb.apikey);
	}).catch((error) => {
		console.log("error in retrieve keys", error);
	});
};

module.exports = {retrieveKeys};



},{"./db":2}],2:[function(require,module,exports){
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
},{"./dom":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";
},{}],5:[function(require,module,exports){
"use strict";

let dom = require('./dom');
let events = require('./events');
let apiKeys = require('./apiKeys');
const wdb = require('./db');



apiKeys.retrieveKeys();

},{"./apiKeys":1,"./db":2,"./dom":3,"./events":4}]},{},[5]);
