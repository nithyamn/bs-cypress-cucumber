# bs-cypress-cucumber
Execute your cypress tests from Github Actions on [BrowserStack Automate](https://automate.browserstack.com/).

# Setup steps

## Set your BrowserStack credentials
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands. 
- For *nix based and Mac machines:
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
- npm install
- npm run test

# Reference
- https://www.browserstack.com/docs/automate/cypress
- https://www.browserstack.com/docs/automate/selenium/github-actions
