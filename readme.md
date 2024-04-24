# WAccess

## What is WAccess?
WAccess is a Chrome plugin, to find guideline violations with respect to WCAG guidelines. 

## Features of WAccess:
1. Processess the guideline criteria with respect to all the three WCAG series (for selected guidelines from each). 
2. Analyzes the HTML page with respect to 13 WCAG 2.0 guidelines, 5 WCAG 2.1 guidelines and 6 WCAG 2.2 guidelines.
3. Violations are specified with the code snippet that violated a particular rule and a possible fix to pass the violated criterion.  

## Uses of WAccess:
WAccess is aimed to help developers find the piece of code that is not confirming to web accessibility standards and fix it.  

## Overview diagram of WAccess:
<img alt="approach" src="https://kowndinya2000.github.io/WAccess-resources.github.io/WAccess-Overview.png">


## Snapshot of Violations highlighted for UIDAI Aadhaar Website (https://uidai.gov.in/):
<img alt="waccess-violation-highlight-on-console" src="https://kowndinya2000.github.io/WAccess-resources.github.io/waccess-1.4.6.png">

## Snapshot of Violations highlighted for Department of Industries & Commerce Website (http://jkindustriescommerce.nic.in/):
<img alt="waccess-violation-highlight-on-console" src="https://kowndinya2000.github.io/WAccess-resources.github.io/WAccess-4.1.1.png">

## Evaluation 
WAccess has been used to evaluate 24 Indian government websites (obtained from GOI India - https://goidirectory.gov.in/).

## What's inside WAccess Repository:
1. Each guideline's criteria is evaluated by the content_scripts that are named in the format ```GuidelineName_ID(ConformanceLevel)``` 
2. For guidelines belonging to WCAG 2.1, we have bundled the entire evaluation to one single file named ```wcag_2_1_bundled.js```
3. ```manifest.json``` file includes the url that triggers start of WAccess, and content scripts that evaluate guideline criteria for the opened website.
4. ```jquery-3.6.0.js``` is the jquery resource file for utilizing the jquery constructs in the content_scripts.

## Steps to install WAccess:
1. Download the repository on your local machine.  
2. Unzip the folder and extract it to a location of your choice on your PC.  
3. Now, open Google Chrome and Go to Settings  
4. Select Extensions or navigate to chrome://extensions  
5. Turn on Developer Mode at the right side top corner of chrome://extensions  
6. Click on “Load unpacked”  
7. A popup appears to select folder  
8. Select WAccess folder from the location you previously extracted to, and click on OK.  
9. WAccess Plugin gets installed on Chrome.  

## Steps to use WAccess:
1. Navigate to any website of your choice
2. Open the web console (using Ctrl + Shift + I) and see through the guidelines being violated and inspect the codes responsible for violation. 

## How to contribute to WAccess
We will be very happy to receive any kind of contributions. Incase of a bug or an enhancement idea or a feature improvement idea, please open an issue or a pull request. Incase of any queries or if you would like to give any suggestions, please feel free to contact Akhila Sri Manasa Venigalla (cs19d504@iittp.ac.in) or Kowndinya Boyalakuntla (cs17b032@iittp.ac.in) or Sridhar Chimalakonda (ch@iittp.ac.in) of RISHA Lab, IIT Tirupati, India.



"js": [
    "style.js",
    "1_1_1_NonTextContent(A).js",
    "1_3_1_InfoAndRelationships(A).js",
    "1_3_5_Identify_Input_Purpose(AA).js",
    "1_3_6_Identify_Purpose(AAA).js",
    "1_4_1_UseOfColor(A).js",
    "1_4_3_Contrast(Minimum)(AA).js",
    "1_4_4_ResizeText(AA).js",
    "1_4_6_Contrast(Enhanced)(AAA).js",
    "2_1_1_Keyboard(A).js",
    "2_2_2_Pause,Stop,Hide(A).js",
    "jquery-3.6.0.js",
    "2_4_4_LinkPurpose(A).js",
    "2_4_6_HeadingsAndLabels(AA).js",
    "2_4_11_FocusAppearanceMinimum(AA).js",
    "2_4_12_FocusAppearanceEnhanced(AAA).js",
    "2_5_7_Dragging(AA).js",
    "2_5_8_Target Size_(Minimum)(AA).js",
    "3_1_1_LanguageOfPage(A).js",
    "3_3_2_LabelsOrInstructions(A).js",
    "3_3_7_AccessibleAuthentication(A).js",
    "4_1_1_Parsing(A).js",
    "wcag_2_1_bundled.js"
]