package StepDefinitions;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/GmailLogin.feature", glue= {"StepDefinitions"},
monochrome = true,
plugin = {"pretty", "junit:target/JUnitReports/report.xml",
		"json:target/JSONRports/report.json",
		"html:target/HtmlReports"}
		)
public class TestRunner {

}
