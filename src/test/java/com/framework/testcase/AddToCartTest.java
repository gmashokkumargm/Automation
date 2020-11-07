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

public class AddToCartTest extends Annotation{
	Report rep = new Report();
	
	@Test(groups="smoke")
	public void addToCartTest() {
		rep.startTestCase("AddCart_001", "Check whether we can able to add one item in cart and checkout");
		
		String itemName="Sauce Labs Bolt T-Shirt";
		
		new LoginPage().loginWithValidCredentials(Data.validUserName, Data.validPassword)
		.addToCart(itemName).clickCartButton().verifyCartAdded(itemName).clickCheckoutButton()
		.enterFirstName(Data.firstName).enterLastName(Data.lastName).enterZipCode(Data.zip)
		.clickContinueButton().verifyAddedItemWithSubTotal().verifyGrandTotal().clickFinishButton()
		.verifyThankyou();
	}
	
	@Test(groups="regression")
	public void addTwoItemAndCheckout(){
		rep.startTestCase("AddCart_002", "Check whether we can able to add two item in cart and checkout");
		
		String itemOne="Sauce Labs Backpack";
		String itemTwo="Sauce Labs Bolt T-Shirt";
		
		new LoginPage().loginWithValidCredentials(Data.validUserName, Data.validPassword)
		.addToCart(itemOne).addToCart(itemTwo).clickCartButton().verifyCartAdded(itemOne)
		.verifyCartAdded(itemTwo).clickCheckoutButton().enterFirstName(Data.firstName)
		.enterLastName(Data.lastName).enterZipCode(Data.zip).clickContinueButton()
		.verifyAddedItemWithSubTotal().verifyGrandTotal().clickFinishButton().verifyThankyou();
	}
}
