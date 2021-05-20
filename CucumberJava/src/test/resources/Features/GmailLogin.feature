# Author: Igor Carvalho de Brito Batista
Feature: Test login functionality (Gmail)

  Scenario Outline: Check login is successful with valid username and password
    Given browser is open
    And user is on login page
    When user enters <username> and <password>
    And user clicks on login
    Then user is navigated to the home page

    Examples: 
      | username          | password  |
      | testedesafio.igor | 1234@4321 |
