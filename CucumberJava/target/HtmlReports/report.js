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
  "status": "passed"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00274.0.0-beta-3\u0027, revision: \u00275d108f9a67\u0027\nSystem info: host: \u0027IGORDESKTOP\u0027, ip: \u0027172.17.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4e538b6bf5ad2e0c9e32d4922f2d56e5, findElement {using\u003did, value\u003didentifierId}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\igorc\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52816}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52816/devtoo..., se:cdpVersion: 90.0.4430.212, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e538b6bf5ad2e0c9e32d4922f2d56e5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:198)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:131)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:619)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1258)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:393)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:380)\r\n\tat StepDefinitions.GmailLoginSteps.user_enters_username_and_password(GmailLoginSteps.java:47)\r\n\tat ✽.user enters testedesafio.igor and 12365446(file:///C:/Users/igorc/Desktop/CucumberJavaAutoTest/CucumberJava/src/test/resources/Features/GmailLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_clicks_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GmailLoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});