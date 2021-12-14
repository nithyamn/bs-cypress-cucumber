![BrowserStack Logo](https://camo.githubusercontent.com/09765325129b9ca76d770b128dbe30665379b7f2915d9b60bf57fc44d9920305/68747470733a2f2f7777772e62726f77736572737461636b2e636f6d2f696d616765732f7374617469632f6865616465722d6c6f676f2e6a7067)

# BrowserStack Example Cypress integration with Github Actions
Execute your cypress tests from Github Actions on [BrowserStack Automate](https://automate.browserstack.com/).

# Setup steps

## Set your BrowserStack credentials
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands. 
	- For * nix based and Mac machines:
      ```
      export BROWSERSTACK_USERNAME=<browserstack-username> &&
      export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
      ```
  	- For Windows:
      ```
      set BROWSERSTACK_USERNAME=<browserstack-username>
      set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
      ```
* If you wish to hard code these values, it can be done in the browserstack.json file.
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)

## Github Actions
To set up the environment variables and other build parameters, please follow our [Github Actions](https://www.browserstack.com/docs/automate/selenium/github-actions#action-setup-env) documentation page.

# Test Execution
- Install dependencies : `npm install`
- Run test: `npm run test`

Note: The command to execute the cypress tests on BrowserStack `browserstack-cypress run --sync` is mentioned in the `package.json` file.
# Reference
- https://www.browserstack.com/docs/automate/cypress
- https://www.browserstack.com/docs/automate/selenium/github-actions
