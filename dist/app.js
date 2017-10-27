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
		wdb.setKeys(results.db.apiKey);
		console.log("retrieveKeys", results.db.apiKey);
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


},{"./dom":3}],3:[function(require,module,exports){
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














































},{}],4:[function(require,module,exports){
"use strict";

const wdb = require('./db');
let dom = require('./dom');
let query;
let weatherArray;


$("#button").click((event) => {
	event.preventDefault();
		wdb.searchWeather($("#input").val());
		$("#input").val("");
});


$("threeDay").click((e) => {
	e.preventDefault();
	dom.searchWeather(weatherArray);
	$("#input").val();
	$("#input").val("");
});

$("fiveDay").click((a) => {
	a.preventDefault();
	wdb.fiveDay(query);
});

module.exports ={};
},{"./db":2,"./dom":3}],5:[function(require,module,exports){
"use strict";

// let dom = require('./dom');
let events = require('./events');
let apiKeys = require('./apiKeys');
// const wdb = require('./db');



apiKeys.retrieveKeys();

},{"./apiKeys":1,"./events":4}]},{},[5]);
