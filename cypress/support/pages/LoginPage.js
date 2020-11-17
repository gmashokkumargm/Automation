/// <reference types="Cypress"/>


class LoginPage {

    //PageObjects
    get emailField() {return '#user-name'}
    get passwordField() {return '#password'}
    get btnLogin() {return '#login-button'}
    get emptyLoginErrorMessage() {return 'Epic sadface'}
    get invalidLoginErrorMessage() {return 'Username and password'}

    //PageActions
    //Enter email, password and login button
    login(email, password){
        cy.enterText(this.emailField,email)
        cy.enterText(this.passwordField,password)
        cy.clickElement(this.btnLogin)
    }

    //Just click login button alone
    clickLoginButton(){
        cy.clickElement(this.btnLogin)
    }

    //Verify error message if we click login button with empty value
    verifyEmptyLogin(){
        cy.containsAssert(this.emptyLoginErrorMessage,'include.text','Username is required')
    }

    //Verify error message if we use invalid credentials
    verifyErrorMessage(){
        cy.containsAssert(this.invalidLoginErrorMessage,'include.text','Username and password do not match')
    }
    
}
export default LoginPage;