/*In TestCase class we just need to call the methods from the page
 * which handles all the login over there 
 * And all the test cases are grouped by category in order to run specific types
 */

package com.framework.testcase;

import org.testng.annotations.Test;

import com.framework.annotations.Annotation;
import com.framework.pages.LoginPage;
import com.framework.reports.Report;
import com.framework.utils.Data;

public class LoginTest extends Annotation{
	
	Report rep = new Report();
	
	@Test(groups="smoke")
	public void validLoginTest(){
		rep.startTestCase("Login_001", "check whether we can able to login with valid credentials or not");
		new LoginPage().loginWithValidCredentials(Data.validUserName, Data.validPassword)
		.verifyLoginSuccess();	
	}
	
	@Test(groups="regression")
	public void checkErrorMessage(){
		rep.startTestCase("Login_002", "Check whether error message is showing or not for invalid credentials");
		new LoginPage().loginWithInvalidCredentials(Data.invalidUserName, Data.invalidPassword)
		.verifyErrorMessage();
	}	
	
}
