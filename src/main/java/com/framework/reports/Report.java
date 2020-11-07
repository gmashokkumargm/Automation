/*
 * This class will help to create extent report 
 */

package com.framework.reports;


import java.text.SimpleDateFormat;
import java.util.Date;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class Report {

	public static ExtentReports extent;
	public static ExtentTest test;
	
	public ExtentReports beginResult(){
		String timeStamp = new SimpleDateFormat("dd.MM.yyyy.HH.mm.ss").format(new Date());
		ExtentSparkReporter html = new ExtentSparkReporter("./reports/reports "+timeStamp+".html");
		extent = new ExtentReports();
		extent.attachReporter(html);
		return extent;
	}
	
	public void startTestCase(String testCaseName, String testCaseDesc){
		test = extent.createTest(testCaseName,testCaseDesc);
	}
	
	public void stepReport(String status,String desc){
		if(status.equalsIgnoreCase("Pass")) {
			test.pass(desc);			
		} else if(status.equalsIgnoreCase("Fail")) {
			test.fail(desc);	
		} else if(status.equalsIgnoreCase("Warning")) {
			test.warning(desc);			
		}		
	}
	
	
	public void endResult(){
		extent.flush();
	}
}
