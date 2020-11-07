package stepDefinitions;


import com.framework.pages.HomePage;
import com.framework.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition{
	
	@Given("login credentials (.+) and (.+)")
	public void valid_login_credentials(String userName, String password){
		new LoginPage().validLoginCredentials(userName, password);
	}
	
	
	@When("Click on login button")
	public void click_on_login_button(){
		new LoginPage().clickOnLoginButton();
	}
	
	
	@Then("Verify home page")
	public void verify_home_page(){
		new HomePage().verifyHomePage();
	}
	
	@Then("Verify error message")
	public void verify_error_message(){
		new LoginPage().verifyErrorMessage();
	}


}
