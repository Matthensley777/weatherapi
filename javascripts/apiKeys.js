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


