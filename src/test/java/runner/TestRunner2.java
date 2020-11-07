package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
			features = "src/test/java/features",
			glue = "stepDefinitions",
			tags="smoke",
			plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})

public class TestRunner2 extends AbstractTestNGCucumberTests {

}
	

