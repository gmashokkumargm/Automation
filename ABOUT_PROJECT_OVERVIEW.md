Framework Structure - TDD branch

scr/main/java
    SeleniumBase package: SeleniumBase - This class will contain all the selenium action along with report attached for each steps
    Reports package:  Report - This class will help to create a html reports
    Utils package:  Data - This class will provide all the data required for the project
    Annotations package:  Annotation - This class will contains pre and post request to run the test methods
    Pages package:  This package will contain all the pages available in the project and will have logic 
    
  
scr/test/java
    TestCase Package: This package will contain all the test cases for project.
                      One class for one functionality and all the test cases are grouped by category Eg: Smoke, Regression etc. 
                      First step for test method is to create a test to log all the steps in particular test case.
                      
                      
To run my test case:
    Maven command: mvn clean
                   mvn build
                   mvn test -Dbrowser=chrome/firefox -Pall/smoke/regression  -> passing browser parameter in order to run in specific browser we are mentioning -Dbrowser=browserName
                                                                             -> passing profile name to run specific type of test case we are created a profiles -Pall/smoke/regression
                                                                             
This maven command will help to integrate with Jenkins easily 
