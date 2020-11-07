/*
 * All pages will hold all the functionalities in respective pages
 * Here all actions should depends on Selenium base page just by calling methods name
 * And Just calling method name it will handle reports and exception if there any
 * And all the methods are reusable 
 */

package com.framework.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.framework.seleniumBase.SeleniumBase;

public class CartPage {
	
	SeleniumBase base = new SeleniumBase();
	
	public CartPage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}

	@FindBy(xpath ="//div[@class='cart_item']")
	List <WebElement> eleCartItemList;
	public CartPage verifyCartAdded(String itemName){
		for(int i=0; i<eleCartItemList.size(); i++){
			String req = eleCartItemList.get(i).getText();
			if(req.equals(itemName)){
				base.verifyExactText(eleCartItemList.get(i), itemName);
			}
		}
		return this;
	}
	
	@FindBy(xpath = "//a[text()='CHECKOUT']")
	WebElement btnCheckout;
	public CheckoutStepOnePage clickCheckoutButton(){
		base.click(btnCheckout, "checkout button");
		return new CheckoutStepOnePage();
	}
	

}
