package com.framework.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.framework.seleniumBase.SeleniumBase;

public class CheckoutStepTwoPage {
	
	SeleniumBase base = new SeleniumBase();
	
	public CheckoutStepTwoPage(){
		PageFactory.initElements(SeleniumBase.driver, this);
	}

	@FindBy(xpath="//div[@class='inventory_item_price']")
	List<WebElement> valuePrice;
	@FindBy(xpath="//div[@class='summary_subtotal_label']")
	WebElement valueSubTotal;
	public CheckoutStepTwoPage verifyAddedItemWithSubTotal(){
		float itemTotal=0;
		for(WebElement s :valuePrice){
		float allItemTotal = Float.parseFloat(base.getPartialText(s,1));
		itemTotal = itemTotal+allItemTotal;
		}
		float subTotal = Float.parseFloat(base.getPartialText(valueSubTotal, 13));
		base.compareTwoValues(subTotal, itemTotal);
		return this;
	}
	
	@FindBy(xpath="//div[@class='summary_tax_label']")
	WebElement valueTax;
	@FindBy(xpath="//div[@class='summary_total_label']")
	WebElement valueGrandTotal;
	public CheckoutStepTwoPage verifyGrandTotal(){
		float subTot = Float.parseFloat(base.getPartialText(valueSubTotal, 13));
		float taxValue = Float.parseFloat(base.getPartialText(valueTax, 6));
		float includingTax=subTot+taxValue;
		float grandTotal = Float.parseFloat(base.getPartialText(valueGrandTotal, 8));
		base.compareTwoValues(includingTax,grandTotal);
		return this;
	}
	
	@FindBy(xpath="//a[text()='FINISH']")
	WebElement btnFinish;
	public CheckoutCompletePage clickFinishButton(){
		base.click(btnFinish, "Finish button");
		return new CheckoutCompletePage();
	}
	
}
