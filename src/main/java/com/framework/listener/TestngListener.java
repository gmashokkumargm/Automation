package com.framework.listener;

import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;

public class TestngListener implements IRetryAnalyzer {

	int maxcount=1;
	
	public boolean retry(ITestResult result) {
		if (!result.isSuccess() & maxcount < 2) {
			maxcount++;
			return true;
		}
		return false;
	}

}
