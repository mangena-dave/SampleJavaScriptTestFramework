/** Custom library to read test config and data files */

//Module inclusions
var fs = require('fs');         //File I/O library

/** 
* Represents a test suite
* @contructor
* @param {string} configPath - Full path of test configuration file
* @param {string} dataPath - Full path of data configuration file
*/
function testClass(configPath, dataPath) {
    this.configPath = configPath;
    this.dataPath = dataPath;
    
    //Imported data var
    this.browser = '';
    this.url = '';
    this.testDesc = '';
    this.testData = null;

    //Import test data from file
    this.importConfig();
    this.importData();
}

/** 
* Imports test configuration data
*/
testClass.prototype.importConfig = function() { 
    var obj = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
    
    this.browser = obj['browser'];
    this.url = obj['url'];
    this.testDesc = obj['testDesc'];
}

/**
* Imports test data
*/
testClass.prototype.importData = function() {
    this.testData = JSON.parse(fs.readFileSync(this.dataPath, 'utf8'));  
}

//Expose functions for this module
exports.testClass = testClass;