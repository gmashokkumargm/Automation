/*
 * In this class we will handle all the pre request and post request for test methods
 */

package com.framework.annotations;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import com.framework.reports.Report;
import com.framework.seleniumBase.SeleniumBase;
import com.framework.utils.Data;

public class Annotation {	
	
	Report rep = new Report();
	SeleniumBase base= new SeleniumBase();
	Data data = new Data();
	
	@BeforeSuite(groups="common")
	public void beforeSuite(){
		rep.beginResult();
		data.readPropertiesFile();
	}
	
	@BeforeMethod(groups="common")
	public void beforeMethod(){
		base.startApp(Data.url);
	}
	
	
	@AfterMethod(groups="common")
	public void afterMethod(){
		base.closeBrowser();
	}
	
	@AfterSuite(groups="common")
	public void afterSuite(){
		rep.endResult();
	}
}
