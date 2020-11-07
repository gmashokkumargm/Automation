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


public class SeleniumBase  {

	public static WebDriver driver;
	
	public void startApp(String url){
		String browser = System.getProperty("browser"); //Getting input from maven command
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
				e.getMessage();
		}
	}

	public void click(WebElement ele, String eleName) {
		try{
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			wait.until(ExpectedConditions.elementToBeClickable(ele));
			ele.click();
		}catch(Exception e){
			e.getMessage();
		}
		
	}

	public void type(WebElement ele, String text) {
		try{
			ele.clear();
			ele.sendKeys(text);
		}catch(Exception e){
			e.getMessage();
		}
		
	}

	public String getText(WebElement ele) {
		String bReturn="";
		try{
			bReturn = ele.getText();
		}catch(Exception e){
			e.getMessage();
		}
		return bReturn;
	}

	public String getTitle() {
		String title="";
		try{
			title = driver.getTitle();
		}catch(Exception e){
			e.getMessage();		
		}
		return title;
	}

	public boolean verifyTitle(String expectedTitle) {
		boolean bReturn = false;
		try{
			if(getTitle().equalsIgnoreCase(expectedTitle)){
				bReturn = true;
			}else{
			}
		}catch(Exception e){
			e.getMessage();
		}
		return bReturn;
	}
	

	public void closeBrowser() {
		try{
			driver.close();
		}catch(Exception e){
			e.getMessage();
		}
	}
	
}
