const express = require('express');
const morgan = require('morgan');
const validateQuery = require('./validateQuery');
const errorHandler = require('./error_handler');
const fetch = require('node-fetch')
const url =  'https://www.ilmatieteenlaitos.fi/observationdata?station=101004/t2m'

const app = express();

const port = 3000;

app.use(morgan('dev'));



app.get('/weather', validateQuery, (req, res, next) => {
    res.send(req.query);
    const makeRequest= async url => {
        try  {
            const res = await fetch(url);
            const data = await res.json();
            console.log('Status:', res.status, res.statusText);
            console.log(data);
            } catch(err  ) {
             console.log(err)
            }
        }
        makeRequest(url);
    });

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));