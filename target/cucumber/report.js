$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login features",
  "description": "",
  "id": "login-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-features;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "login credentials \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-features;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 9,
      "id": "login-features;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 10,
      "id": "login-features;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9512036886,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-features;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "login credentials standard_user and secret_sauce",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    },
    {
      "val": "secret_sauce",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.valid_login_credentials(String,String)"
});
formatter.result({
  "duration": 552615222,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 1255036319,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_home_page()"
});
formatter.result({
  "duration": 5268525,
  "status": "passed"
});
formatter.after({
  "duration": 61626181,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify error message showing properly for invalid credentials",
  "description": "",
  "id": "login-features;verify-error-message-showing-properly-for-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "login credentials \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-features;verify-error-message-showing-properly-for-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 18,
      "id": "login-features;verify-error-message-showing-properly-for-invalid-credentials;;1"
    },
    {
      "cells": [
        "check",
        "check"
      ],
      "line": 19,
      "id": "login-features;verify-error-message-showing-properly-for-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1608243666,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify error message showing properly for invalid credentials",
  "description": "",
  "id": "login-features;verify-error-message-showing-properly-for-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "login credentials check and check",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 18
    },
    {
      "val": "check",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.valid_login_credentials(String,String)"
});
formatter.result({
  "duration": 360381197,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 96628320,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_error_message()"
});
formatter.result({
  "duration": 18302779,
  "status": "passed"
});
formatter.after({
  "duration": 52607978,
  "status": "passed"
});
});