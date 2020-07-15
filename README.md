# OpenAPI Node Starter

Getting started with OpenAPI and NodeJS

## Setup Instructions
1. Install NodeJS v12+
2. `npm install`
3. Set the server name and credentials near the top of app.js
4. `npm start`

## File Descriptions
- app.js - Main file which creates a connection
- openapiIncludeAsync.js - Function to asynchronously include the latest version of irisapi.nocache.js from web server
- openapiPolyfill.js - Adds some missing Event classes for OpenAPI with Node
- irisapi.nocache.js (not tracked) - Downloaded by openapiIncludeAsync and contains the class definitions for using the API
