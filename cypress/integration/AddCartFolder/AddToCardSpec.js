import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'
import CartPage from '../../support/pages/CartPage'
import CheckoutPage from '../../support/pages/CheckoutPage'
import CheckoutOverviewPage from '../../support/pages/CheckoutOverviewPage'
import CheckoutCompletePage from '../../support/pages/CheckoutCompletePage'
import CommonPage from '../../support/pages/CommonPage'

describe('Add to card and checkout the product', function(){

    //To access all the methods in the pages creating objects
    const loginPage = new LoginPage
    const homePage = new HomePage
    const cartPage = new CartPage
    const checkoutPage = new CheckoutPage
    const checkoutOverviewPage = new CheckoutOverviewPage
    const checkoutCompletepage = new CheckoutCompletePage
    const commonPage = new CommonPage

    //Importing url from cypress.json and data from fixtures folder
    beforeEach(function(){
        cy.visit(Cypress.env('url'))
        cy.fixture('data').then(function(data){
            this.data=data
        })
        cy.fixture('checkoutPageData').then(function(checkoutPageData){
            this.checkoutPageData=checkoutPageData
        })
    })

    it('Add one product to cart, checkout and verify thankyou page', function(){
        var productName ='Test.allTheThings() T-Shirt (Red)'
        loginPage.login(this.data.validEmail,this.data.validPassword)
        homePage.clickAddToCart(productName)
        commonPage.clickCartIcon()
        cartPage.verifyProduct(productName)
        cartPage.verifyNumberOfProducts(1)
        cartPage.clickCheckOutButton()
        checkoutPage.enterInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.zip)
        checkoutPage.clickContinueButton()
        checkoutOverviewPage.verifySubTotal()
        checkoutOverviewPage.verifyTotal()
        checkoutOverviewPage.clickFinishButton()
        checkoutCompletepage.verifyThankyou()
    })

    it('Add two products to cart, checkout and verify thankyou page', function(){
        var products2=['Test.allTheThings() T-Shirt (Red)','Sauce Labs Bike Light']
        loginPage.login(this.data.validEmail,this.data.validPassword)
        products2.forEach(function(ele) {
            homePage.clickAddToCart(ele)    //instead of calling multiple time using foreach loop
        });
        commonPage.clickCartIcon()
        products2.forEach(function(ele) {
            cartPage.verifyProduct(ele)
        });
        cartPage.verifyNumberOfProducts(products2.length)
        cartPage.clickCheckOutButton()
        checkoutPage.enterInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.zip)
        checkoutPage.clickContinueButton()
        checkoutOverviewPage.verifySubTotal()
        checkoutOverviewPage.verifyTotal()
        checkoutOverviewPage.clickFinishButton()
        checkoutCompletepage.verifyThankyou()
    })

    it('Add three products to cart, verify, checkout and verify thankyou page',function(){
        var products3 =['Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie','Sauce Labs Bike Light']
        loginPage.login(this.data.validEmail,this.data.validPassword)
      
        products3.forEach(function(ele) {
            homePage.clickAddToCart(ele)
        });
         commonPage.clickCartIcon()
        products3.forEach(function(ele) {
            cartPage.verifyProduct(ele)
        });
        cartPage.verifyNumberOfProducts(products3.length)
        cartPage.clickCheckOutButton()
        checkoutPage.enterInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.zip)
        checkoutPage.clickContinueButton()
        checkoutOverviewPage.verifySubTotal()
        checkoutOverviewPage.verifyTotal()
        checkoutOverviewPage.clickFinishButton()
        checkoutCompletepage.verifyThankyou()
    })

})