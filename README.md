# Playwright Automation - Sauce Demo

This project automates the end-to-end flow of the [Sauce Demo](https://www.saucedemo.com/) web application using **Playwright with JavaScript** and the **Page Object Model (POM)** design pattern.

## Features

- Login to the application
- Add product to cart
- Checkout process
- Logout from the application
- Screenshot capture on test failure

## Project Structure

```text
PLAYWRIGHTAUTOMATION/
├── pages/                
│   ├── cartPage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── tests/                
│   ├── login.spec.js
│   └── products.spec.js
├── utils/                
├── test-results/         
├── playwright-report/    
├── .env                  
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js  
```


## Installation

```bash
git clone https://github.com/jawad-sqa/saucedemo-playwright.git
cd saucedemo-playwright
npm install
```

##  Environment Setup

```bash
USERNAME=your_username
PASSWORD=your_password
```

## Run Tests

To execute tests, run:
```bash
npx playwright test products.spec.js --project=chromium --headed
```

## Screenshots on Failure

Screenshots are automatically taken and saved in the test results folder when a test fails.


## HTML Report

After running tests, view the report using:

```bash
npx playwright show-report
```



