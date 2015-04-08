/* index.js
Quick login test with Facebook
*/

//Module inclusions
var fs = require('fs');
var testObj = require('./testUtils');
var webdriver = require('/node_modules/selenium-webdriver');

//Constants
var CONFIG_FILE = "testConfig.json"
var TEST_DATA_FILE = "testData.json"

var test;       //test config and data
var driver;     //Selenium browser driver

describe('Facebook Login Test: ', function(){
    //Set the time out to 15sec to allow the browser to load
    this.timeout(10000);

/*********************************** Test Setup *********************************************/
    before(function(){
        //Load test config and data
        test = new testObj.testClass(CONFIG_FILE, TEST_DATA_FILE);

        //Initiate browser driver

    })

    after(function(){
        //Close browser

    })

    beforeEach(function(){
        //Navigate to url
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    })

    afterEach(function(){
        //Logout
                driver.quit();
    })

/*********************************** Test Cases *********************************************/

    describe('When entering login credentials', function(){
        it('actual should match expected', function(done){
            //Determine the number of tests to run
            numTests = Object.keys(test.testData).length;
            testNo = 1;

            //Run every test from the testData file
            while (testNo <= numTests) {
                testKey = "test" + testNo.toString();

                //retrieve test specific data
                login = test.testData[testKey]['login'];
                pass = test.testData[testKey]['pass'];
                desc = test.testData[testKey]['desc'];
                expected = test.testData[testKey]['expected'];

                describe(testKey + ': ' + desc, function(){
                    it('Expected is ' + expected, function(done) {
                        driver.get(test.url);
                        driver.findElement(webdriver.By.id('email')).sendKeys(login);
                        driver.findElement(webdriver.By.id('pass')).sendKeys(pass);
                        driver.findElement(webdriver.By.id('loginbutton')).click();
                        driver.wait(function() {
                            return driver.getTitle().then(function(title) {
                                return title === expected;
                                done();
                            });
                        }, 1000);
                    })
                })
                //Increment the test count
                testNo++;
            }
        })
    })
})