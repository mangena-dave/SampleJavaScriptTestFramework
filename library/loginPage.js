/** Custom library to support login tests against Facebook landing page */

//Module inclusions             
var webdriver = require('webdriver-sync');      //Synchronous webdriver, must use nod v0.10.XX or lower
var assert = require('assert');                 //NodeJS assertion library

var testInfo;       							//test config and data

/**
* Represents a login page
* @constructor
* @param {testObj} testInfo - Test object containing test config and test data
* @param {string} testKey - Test case key for testData hash
*/
function loginPage(testInfo, testKey){
    this.login = testInfo.testData[testKey]['login'];
    this.pass = testInfo.testData[testKey]['pass'];
    this.expected = testInfo.testData[testKey]['expected'];
    this.url = testInfo.url;
    this.browser = testInfo.browser;
    this.driver = null;
}

/** Loads the landing page using the specified browser */
loginPage.prototype.loadPage = function() {
	var wd;         //webdriver object

	//Load the specified browser driver. Default is Firefox
    if (this.browser === "chrome") {
        wd = webdriver.ChromeDriver;    
    } else {
        wd = webdriver.FirefoxDriver; //Not working at the moment :(
    }    
    
    //Load the browser and navigate to the specified URL
    this.driver = new wd();  
    this.driver.get(this.url);  
}

/** Attempts to login with the given credentials */
loginPage.prototype.attemptLogin = function () {        
    //Enter params
    this.driver.findElement(webdriver.By.id('email')).sendKeys(this.login);
    this.driver.findElement(webdriver.By.id('pass')).sendKeys(this.pass);

    //Submit creds
    this.driver.findElement(webdriver.By.id('loginbutton')).click();

    //Verify loaded page title
    assert.equal(this.driver.getTitle(),this.expected);
}

/** Closes the browser */
loginPage.prototype.close = function (){
	this.driver.quit();
}

//Expose functions for this module
exports.loginPage = loginPage;