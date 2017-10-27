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