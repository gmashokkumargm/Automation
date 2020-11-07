package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
			features = "src/test/java/features",
			glue = "stepDefinitions",
			plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})

public class TestRunner extends AbstractTestNGCucumberTests {

}
	

