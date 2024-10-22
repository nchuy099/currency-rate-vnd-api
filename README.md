## Currency rates for VND API
- This API provides endpoints for fetching currency exchange rates to VND
### Install
1. Install NodeJS from [nodejs.org](https://nodejs.org/)
2. Install NPM packages
```
npm init
npm install express
npm install dotenv --save
npm install @xmldom/xmldom
npm install --save xml-js
```
3. Rename the `.env.example` file to `.env`
### Usage
- Start the server: `node server.js` 
- To use this API, make a GET request to the following endpoint:
  `/currency-rates`
- Example of making a request:
`http://localhost:8000/currency-rates`
