/* testUtils
*/
var fs = require('fs'), obj;

//Contructor
function testClass(sConfigPath, sDataPath) {
    this.sConfigPath = sConfigPath;
    this.sDataPath = sDataPath;
    
    //Imported data var
    this.browser = '';
    this.url = '';
    this.testData = null;

    this.importConfig();
    this.importData();

}

//Import test configuration data
testClass.prototype.importConfig = function() { 
    obj = JSON.parse(fs.readFileSync(this.sConfigPath, 'utf8'));
    
    this.browser = obj['browser'];
    this.url = obj['url'];
}

//Import test data
testClass.prototype.importData = function() {
    this.testData = JSON.parse(fs.readFileSync(this.sDataPath, 'utf8'));  
}

//Exposed functions for this module
exports.testClass = testClass;