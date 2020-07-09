# OpenAPI Node Starter

Getting started with OpenAPI and NodeJS

## Setup Instructions
1. Install NodeJS v12+, then run the following 2 commands
2. `npm install`
3. `npm start`

## File Descriptions
- app.js - Main file which creates a connection
- openapiIncludeAsync.js - Function to asynchronously include the latest version of irisapi.nocache.js from web server
- openapiPolyfill.js - Adds some missing Event classes for irisapi with Node
- irisapi.nocache.js (not tracked) - Downloaded by irisapiIncludeAsync and contains the class definitions for using the API
