/** Sample login test against Facebook with data-driven test framework */

// :TODO: Figure out a way to make this script reusable by pulling code
//  out of it block into a module and auto-magically load it

//Module inclusions           
var testObj = require('./library/testUtils');       //Custom library to read config and data files
var login = require('./library/loginPage');         //Custom library to hold login information

//Constants
var CONFIG_FILE = "testConfig.json";        //Full path to test configuration
var TEST_DATA_FILE = "testData.json";       //Full path to test data
var TIMEOUT = 15000;                        //Used to adjust script timeout

var testInfo;                               //Imported test config and data
var loginPage;                              //Instance of login page class

/** Main test script function
* @param {string} testDesc - Test suite description
* @param {string} testKey - Test case description used to find associated data in testInfo object
*/
function runTestScript(testDesc, testKey) {
    describe(testDesc, function(){
        this.timeout(TIMEOUT);   

        before(function(){
            //Create a new test object
            loginPage = new login.loginPage(testInfo, testKey);             
        })

        after(function(){
            //Close the browser
            loginPage.close();
        })

        //This is where the actual test steps take place
        it(testKey, function(done){ 

            //Load the page and attempt to login with given credentials
            loginPage.loadPage();
            loginPage.attemptLogin();

            done();
        }); 
    }) 
} 

//Import the test config and test data into the testInfo hash
testInfo = new testObj.testClass(CONFIG_FILE, TEST_DATA_FILE);

//Run the test script for each test data set
for (var k in testInfo.testData) {
    runTestScript(testInfo.testDesc, k);
} 