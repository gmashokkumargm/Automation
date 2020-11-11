//package com.framework.reports;
//
//import java.io.File;
//
//import org.apache.commons.io.FileUtils;
//import org.openqa.selenium.OutputType;
//import org.openqa.selenium.TakesScreenshot;
//import org.openqa.selenium.WebDriverException;
//
//import com.framework.seleniumBase.SeleniumBase;
//
//public class TakeSnap {
//	
//	SeleniumBase base = new SeleniumBase();
//
//	public long takeSnap() {
//
//		long number = (long) Math.floor(Math.random() * 900000000L) + 10000000L;
//		try {
//			FileUtils.copyFile(((TakesScreenshot) SeleniumBase.driver).getScreenshotAs(OutputType.FILE) , new File("./reports/images/"+number+".png"));
//		} catch (WebDriverException e) {
//			e.printStackTrace();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return number;
//	}
//
//}
