const storageService = require("./storageService");

// attach habitObserver for convenient access from the package import
try {
    storageService.habitObserver = require("./habitObserver");
} catch (e) {
    // ignore if habitObserver is not available
}

module.exports = storageService;
