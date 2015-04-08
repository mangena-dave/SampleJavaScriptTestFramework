Sample Data-Driven Test Framework

*** WORK-IN-PROGRESS ***

Uses data from a JSON file to test various login combinations against the Facebook login page.
Implemented using NodeJS as the IDE and Mocha as the test framework. Selenium-WebDriver is used for web functions.

Setup required:

NodeJS
- https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

Mocha
- http://mochajs.org/#installation

Selenium
- http://www.seleniumhq.org/docs/03_webdriver.jsp

Relevant Files:

index.js - main file

testUtils.js - helper test utility functions to import config and test data

testConfig.json - test script configuration info i.e. browser, url

testData.json - test data used in the tests

To run:
mocha index.js

Notes:

You will need to add additional drivers depending on the browser you are testing with.
You will have to enter valid creds in the testData.json file to pass the 'valid' test. For privacy purposes, I did not leave mine in :)
