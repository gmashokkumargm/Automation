Feature: Login features

@Test
Scenario Outline: Login with valid credentials
Given login credentials <userName> and <password>
When Click on login button
Then Verify home page
Examples: 
|userName      |password   |
|standard_user |secret_sauce|

@Test
Scenario Outline: Verify error message showing properly for invalid credentials
Given login credentials <userName> and <password>
When Click on login button
Then Verify error message
Examples: 
|userName   |password|
|check		|check	 |
