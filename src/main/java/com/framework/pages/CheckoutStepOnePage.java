package com.framework.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.framework.seleniumBase.SeleniumBase;

public class CheckoutStepOnePage {
	
	SeleniumBase base = new SeleniumBase();
	
	public CheckoutStepOnePage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}
	
	@FindBy(id="first-name")
	WebElement eleFirstName;
	public CheckoutStepOnePage enterFirstName(String firstName){
		base.type(eleFirstName, firstName);
		return this;
	}
	
	@FindBy(id="last-name")
	WebElement eleLastName;
	public CheckoutStepOnePage enterLastName(String lastName){
		base.type(eleLastName, lastName);
		return this;
	}
	
	@FindBy(id="postal-code")
	WebElement eleZipCode;
	public CheckoutStepOnePage enterZipCode(String zip){
		base.type(eleZipCode, zip);
		return this;
	}
	
	@FindBy(css=".btn_primary.cart_button")
	WebElement btnContinue;
	public CheckoutStepTwoPage clickContinueButton(){
		base.click(btnContinue, "Continue button");
		return new CheckoutStepTwoPage();
	}
	
}
