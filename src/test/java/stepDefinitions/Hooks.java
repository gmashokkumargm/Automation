//In this class we will handle all the pre request and post request for test methods

package stepDefinitions;


import com.framework.seleniumBase.SeleniumBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {	
	
	SeleniumBase base= new SeleniumBase();
	
	@Before
	public void beforeScenario(){
		base.startApp("https://www.saucedemo.com/index.html");	
	}
	
	
	@After
	public void afterScenario(){
		base.closeBrowser();
	}
	
}
