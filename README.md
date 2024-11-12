# Sprint 7 project
# Sprint 7 project - Hector Guadalupe
# JavaScript API Testing Project

## Project Description

Congratulations! You’ve made it through your introduction to JavaScript, and now it’s time to put your skills to the test. This project consists of five tasks where you will write tests for **GET**, **POST**, **PUT**, and **DELETE** requests using Jest as the testing framework.

You will work with Git and GitHub, and add your tests to the appropriate files in the `tests` folder using the provided templates. The tests interact with the Urban Grocers API, utilizing a configuration file (`config.js`) for API endpoint variables.

## Technologies Used

- **JavaScript**: The primary programming language used for this project.
- **Node.js**: The runtime environment for executing JavaScript code outside of a browser.
- **Jest**: A testing framework used for writing and running tests.
- **Fetch API**: For making HTTP requests.
- **node-fetch**: A lightweight module that brings `fetch` to Node.js (used if Node.js version < 18).
-**VSCode**: Visual Studio Code (VS Code) is a code editor that helps developers write, build, and debug code
-**Apidoc**: The documentation source used 

## Project Structure


- **deleteHandlers.test.js** , **getHandlers.test.js** , **postHandlers.test.js** , **putHandlers.test.js**   :  test files for different API endpoints.
- **config.js**: Contains the API base URL used in all requests.
- **package.json**: Contains project dependencies and test scripts.
- **README.md**: This file, providing project information and setup instructions.

## API Endpoints Tested

1. **GET /api/v1/warehouses**: Retrieves a list of warehouses.
2. **POST /api/v1/warehouses/check**: Checks the availability of products in warehouses.
3. **PUT /api/v1/products/3**: Grocery item price change
4. **DELETE /api/v1/kits/7**: Deleting the kit

## How to Run the Project

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **VSCode** (Code Editor)

### Installation

1. Clone the repository:
cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
   ```bash
   git clone https://github.com/your-username/your-repo.git

2. Before starting your work with the project, run npm install from the console in your project folder. 

3. Ensure that your API base URL is set correctly in config.js

4. Running the Tests
To run all tests, use the following command:
npx jest

Test Coverage
- The tests check the response status codes to ensure successful requests.
- The tests also validate the structure and content of the response bodies.
- All tests were able to pass successfully, confirming that the API requests are correctly implemented.


### **Additional Notes**
- Replace `your-username` and `your-repo` in the clone command with your actual GitHub username and repository name.

