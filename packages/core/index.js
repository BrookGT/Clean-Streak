const storageService = require("./storageService");
const habitObserver = require("./habitObserver");
const habitUtils = require("./habitUtils");

// Keep a service-first export shape while exposing related helpers.
storageService.habitObserver = habitObserver;
storageService.habitUtils = habitUtils;

module.exports = storageService;
