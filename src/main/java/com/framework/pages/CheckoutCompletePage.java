package com.framework.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.framework.seleniumBase.SeleniumBase;

public class CheckoutCompletePage {

	public CheckoutCompletePage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}
	
	SeleniumBase base = new SeleniumBase();
	
	@FindBy(xpath="//h2[@class='complete-header']")
	WebElement valueThankyou;
	public CheckoutCompletePage verifyThankyou(){
		base.verifyExactText(valueThankyou, "THANK YOU FOR YOUR ORDER");
		return this;
	}
}
