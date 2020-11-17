const data = require('../../Data/data')

const loginPage = require('../../pageobjects/LoginPage')
const homePage = require('../../pageobjects/HomePage')
const cartPage = require('../../pageobjects/CartPage')
const commonPage = require('../../pageobjects/CommonPage')
const CheckoutStepOnePage = require('../../pageobjects/CheckoutStepOnePage')
const CheckoutStepTwoPage = require('../../pageobjects/CheckoutStepTwoPage')
const CheckoutCompletePage = require('../../pageobjects/CheckoutCompletePage')


describe('Add to cart and checkout the product',function() {

    it('Add one product to cart, checkout and verify thankyou page', function() {
        var productName ='Test.allTheThings() T-Shirt (Red)'
        loginPage.login(data.validUserName,data.validPassword)
        homePage.clickAddToCart(productName)
        commonPage.clickCartIcon()
        cartPage.verifyNumberOfProductsAdded(1)
        cartPage.verifyAddedProduct(productName)
        cartPage.clickCheckoutButton()
        CheckoutStepOnePage.enterInformation(data.checkoutStepone.firstName, data.checkoutStepone.lastName, data.checkoutStepone.Zip)
        CheckoutStepOnePage.clickContinueButton()
        CheckoutStepTwoPage.verifyProductsValueAndItemTotal()
        CheckoutStepTwoPage.verifyGrandTotal()
        CheckoutStepTwoPage.clickFinishButton()
        CheckoutCompletePage.verifyThankyou('THANK YOU FOR YOUR ORDER')  
    })

    it('Add two products to cart, checkout and verify thankyou page', function(){

        var product2 = ['Test.allTheThings() T-Shirt (Red)','Sauce Labs Bike Light']
        loginPage.login(data.validUserName,data.validPassword)
        product2.forEach(function(ele){
            homePage.clickAddToCart(ele)
        })
        commonPage.clickCartIcon()
        cartPage.verifyNumberOfProductsAdded(product2.length)
        product2.forEach(function (ele){
            cartPage.verifyAddedProduct(ele)
        })
        cartPage.clickCheckoutButton()
        CheckoutStepOnePage.enterInformation(data.checkoutStepone.firstName, data.checkoutStepone.lastName, data.checkoutStepone.Zip)
        CheckoutStepOnePage.clickContinueButton()
        CheckoutStepTwoPage.verifyProductsValueAndItemTotal()
        CheckoutStepTwoPage.verifyGrandTotal()
        CheckoutStepTwoPage.clickFinishButton()
        CheckoutCompletePage.verifyThankyou('THANK YOU FOR YOUR ORDER')  
    })

    it('Add three products to cart, checkout and verify thankyou page', function(){

        var product3 = ['Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie','Sauce Labs Bike Light']
        loginPage.login(data.validUserName,data.validPassword)
        product3.forEach(function(ele){
            homePage.clickAddToCart(ele)
        })
        commonPage.clickCartIcon()
        cartPage.verifyNumberOfProductsAdded(product3.length)
        product3.forEach(function (ele){
            cartPage.verifyAddedProduct(ele)
        })
        cartPage.clickCheckoutButton()
        CheckoutStepOnePage.enterInformation(data.checkoutStepone.firstName, data.checkoutStepone.lastName, data.checkoutStepone.Zip)
        CheckoutStepOnePage.clickContinueButton()
        CheckoutStepTwoPage.verifyProductsValueAndItemTotal()
        CheckoutStepTwoPage.verifyGrandTotal()
        CheckoutStepTwoPage.clickFinishButton()
        CheckoutCompletePage.verifyThankyou('THANK YOU FOR YOUR ORDER')  
    })
    
})