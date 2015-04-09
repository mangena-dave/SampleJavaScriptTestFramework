Sample Data-Driven Test Framework

Uses data from a JSON file to test various login combinations against the Facebook landing page.
Implemented using NodeJS as the IDE and Mocha as the test framework. webdriver-sync is used for web functions.

Setup required:

NodeJS
- https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

Mocha
- http://mochajs.org/#installation

webdriver-sync
- https://www.npmjs.com/package/webdriver-sync
* This is a synchronous wrapped version of the JAVA webdriver API
** As of 4/8/2015, this will only work with NodeJS versions of v0.10.XX

Relevant Files:

index.js - main file

testUtils.js - helper test utility functions to import config and test data

loginPage.js - library functions to support page operations on Facebook login page

testConfig.json - test script configuration data

testData.json - test data used in the tests

To run:
mocha index.js

Notes:

1) You may need to add additional web drivers depending on the browser you are testing with.

2) You will have to enter valid creds in the testData.json file to pass the 'valid' test. For privacy reasons, I did not leave mine in :)

3) This example framework will only support Chrome at the moment.

TO-DO:
1) Add exception handling for things like when the import files don't exist or the data is incorrect/incomplete

2) Figure out a way to make the main file load the actual script so that it can be re-used w/o recopying code

3) Figure out why it doesn't work on FF

