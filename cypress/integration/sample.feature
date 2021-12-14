Feature: Google

Scenario: Login to Bstackdemo website
  Given I am on the Bstackdemo website and click on signin
  When I enter "demouser" and "testingisfun99"
  Then I should see user as "demouser"