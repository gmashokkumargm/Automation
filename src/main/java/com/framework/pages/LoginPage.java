/*
 * All pages will hold all the functionalities in respective pages
 * Here all actions should depends on Selenium base page just by calling methods name
 * And Just calling method name it will handle reports and exception if there any
 * And all the methods are reusable 
 */



package com.framework.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.framework.seleniumBase.SeleniumBase;

public class LoginPage  {
	
	SeleniumBase base = new SeleniumBase();

	public LoginPage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}
	
	@FindBy(id= "user-name" )
	WebElement eleUserNameField;
	
	@FindBy(id ="password") 		
	WebElement elePasswordField;
	
	@FindBy(id ="login-button") 	
	WebElement eleLoginButton;
	
	public HomePage loginWithValidCredentials(String userName, String password){
		base.click(eleUserNameField, "User name Field");
		base.type(eleUserNameField, userName);
		base.click(elePasswordField, "password field");
		base.type(elePasswordField, password);
		base.click(eleLoginButton,"Login button");
		return new HomePage();
	}
	
	public LoginPage loginWithInvalidCredentials(String userName, String password){
		base.click(eleUserNameField, "User name Field");
		base.type(eleUserNameField, userName);
		base.click(elePasswordField, "password field");
		base.type(elePasswordField, password);
		base.click(eleLoginButton,"Login button");
		return this;
	}

	
	@FindBy (xpath = "//h3[@data-test='error']")
	WebElement eleErrorMessage;
	public LoginPage verifyErrorMessage(){
		base.getText(eleErrorMessage);
		return this;
	}
	
	
	
}
