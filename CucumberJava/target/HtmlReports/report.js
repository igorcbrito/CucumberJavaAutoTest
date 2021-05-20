$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GmailLogin.feature");
formatter.feature({
  "name": "Test login functionality (Gmail)",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "testedesafio.igor",
        "1234@4321"
      ]
    },
    {
      "cells": [
        "testedesafio.igor",
        "12365446"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testedesafio.igor and 1234@4321",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Login realizado com sucesso!\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat StepDefinitions.GmailLoginSteps.user_is_navigated_to_the_home_page(GmailLoginSteps.java:71)\r\n\tat ✽.user is navigated to the home page(file:///C:/Users/igorc/eclipse-workspace/CucumberJava/src/test/resources/Features/GmailLogin.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Check login is successful with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testedesafio.igor and 12365446",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.cssSelector: input[placeholder\u003d\u0027Pesquisar e-mail\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-beta-3\u0027, revision: \u00275d108f9a67\u0027\nSystem info: host: \u0027IGORDESKTOP\u0027, ip: \u0027192.168.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1261)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:386)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:380)\r\n\tat StepDefinitions.GmailLoginSteps.user_is_navigated_to_the_home_page(GmailLoginSteps.java:67)\r\n\tat ✽.user is navigated to the home page(file:///C:/Users/igorc/eclipse-workspace/CucumberJava/src/test/resources/Features/GmailLogin.feature:9)\r\n",
  "status": "failed"
});
});