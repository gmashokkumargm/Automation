/*
 * Selenium base class will contain all the Selenium actions
 * Eg: click, get text, verify element ect
 * All the action in automation should depend on this class
 * It also has reports for each and every actions
 * And handled exceptions
 */

package com.framework.seleniumBase;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.framework.reports.Report;

public class SeleniumBase extends Report {

	public static WebDriver driver;
	
	public void startApp(String url){
		//String browser = System.getProperty("browser"); //Getting input from maven command
		String browser="chrome";
		try{
			if(browser.equalsIgnoreCase("chrome")){
				System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver");
				driver = new ChromeDriver();
			}
			if(browser.equalsIgnoreCase("firefox")){
				System.setProperty("webdriver.gecko.driver", "./drivers/geckodriver");
			}
			driver.get(url);
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			}catch(WebDriverException e){
				System.out.println(e.getMessage());
		}
	}

	public void click(WebElement ele, String eleName) {
		try{
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			wait.until(ExpectedConditions.elementToBeClickable(ele));
			ele.click();
			stepReport("pass","The Element "+eleName+" clicked sucessfully");
		}catch(Exception e){
			stepReport("fail", "The Element "+eleName+" failed to click "+ e.getMessage());
		}
		
	}

	public void type(WebElement ele, String text) {
		try{
			ele.clear();
			ele.sendKeys(text);
			stepReport("pass", "The text "+text+" entered sucessfully");
		}catch(Exception e){
			stepReport("fail","The text "+text+" failed to enter "+e.getMessage());
		}
		
	}

	public String getText(WebElement ele) {
		String bReturn="";
		try{
			bReturn = ele.getText();
			stepReport("pass","The text "+ bReturn+ " got sucessfully" );
		}catch(Exception e){
			stepReport("fail","Failed while getting text "+e.getMessage());
		}
		return bReturn;
	}

	public String getTitle() {
		String title="";
		try{
			title = driver.getTitle();
		}catch(Exception e){
			stepReport("fail", "Get title method is failed "+e.getMessage());
		}
		return title;
	}

	public boolean verifyTitle(String expectedTitle) {
		boolean bReturn = false;
		try{
			if(getTitle().equalsIgnoreCase(expectedTitle)){
				stepReport("pass", "The Expected title "+expectedTitle+ " matches with original "+getTitle());
				bReturn = true;
			}else{
				stepReport("Fail", "The Expected title "+expectedTitle+ " didn't match with original "+getTitle());
			}
		}catch(Exception e){
			stepReport("fail", "WedDriver Exception while verifying title "+e.getMessage());
		}
		return bReturn;
	}
	
	public void verifyExactText(WebElement ele, String expectedText) {
		try {
			if(getText(ele).equals(expectedText)) {
				stepReport("pass","The expected text matches exactly with actual "+expectedText);
			}else {
				stepReport("fail","The expected text doesn't contain the actual "+expectedText);
			}
		} catch (WebDriverException e) {
			stepReport("fail", "WebDriverException : "+e.getMessage());
		}
	}
	
	public void compareTwoValues(float a, float b){
		if(a==b){
			stepReport("pass", "The value "+a+" matches with value "+b);
		}
		else
			stepReport("fail","The value did not match");
	}
	
	public String getPartialText(WebElement ele, int fromIndex){
		String partialText="";
		try{
			partialText = getText(ele).substring(fromIndex);
		}catch(Exception e){
			stepReport("fail","Exception occured while getting partial text");
		}
		return partialText;
	}
	
	public void closeBrowser() {
		try{   
			driver.close();
			stepReport("pass", "The browser has been closed");
		}catch(Exception e){
			stepReport("fail","Failed to close the browser "+e.getMessage());
		}
	}

	
}
