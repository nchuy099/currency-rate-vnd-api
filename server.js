require('dotenv').config();
const express = require('express');
const { DOMParser } = require('@xmldom/xmldom'); 
const convert = require('xml-js');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const url = process.env.VIETCOMBANK_URL;

app.get('/currency-rates', async(req, res) => {

    try {
        let response = await fetch(url);
        let textData = await response.text();
        let parser = new DOMParser();
        let xmlText = parser.parseFromString(textData, 'text/xml');
        let jsonText = convert.xml2json(xmlText, {
            compact: true,
            spaces: 2
        });
        res.status(200).send(JSON.parse(jsonText));
    } catch (error) {
        console.log('Error scraping data:', error);
        res.status(500).send('Error scraping data');
    }
    
});

app.listen(port, hostname, () => {
    console.log('hello');
});