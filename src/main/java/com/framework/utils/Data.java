/*
 * This class will serve all the datas requiered for project
 */

package com.framework.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


public class Data {
	
	public static String url;
	public static String validUserName;
	public static String validPassword;
	public static String browserName;
	public static String invalidUserName;
	public static String invalidPassword;
	public static String firstName;
	public static String lastName;
	public static String zip;


	
	public void readPropertiesFile() {

		
		Properties prop= new Properties();
		FileInputStream file;
		
		try {
			file = new FileInputStream("./Data/data.properties");
		
		try {
			prop.load(file);
			 url = prop.getProperty("URL");
			 validUserName= prop.getProperty("validUserName");
			 validPassword= prop.getProperty("validPassword");
			 browserName= prop.getProperty("browserName");	
			 invalidUserName= prop.getProperty("invalidUserName");			
			 invalidPassword= prop.getProperty("invalidPassword");
			 firstName = prop.getProperty("firstName");
			 lastName = prop.getProperty("lastName");
			 zip = prop.getProperty("zip");
		} catch (IOException e) {
			e.printStackTrace();
		}
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}
	}

	
	
	
	
}

