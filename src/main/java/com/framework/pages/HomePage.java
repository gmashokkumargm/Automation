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


public class HomePage  {

	SeleniumBase base = new SeleniumBase();
	
	public HomePage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}
	
	public HomePage verifyHomePage(){
		base.verifyTitle("Swag Labs" );
		return this;
	}

	@FindBy(xpath = "//div[@class='inventory_item_name']")
	List <WebElement> eleListOfItems;
	@FindBy(xpath = "//div[@class='inventory_item']/div/button")
	List <WebElement> eleAddToCart;
	public HomePage addToCart(String itemName) {
		for (int i=1; i<=eleListOfItems.size(); i++){
			String req = eleListOfItems.get(i).getText();
			if(req.equals(itemName)){
				base.click(eleAddToCart.get(i), "Add to cart button");
				break;
			}
		}
		return this;
	}
	
	
	
	
}
