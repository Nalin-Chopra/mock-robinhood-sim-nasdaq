const resources = require('./companyData.js');
const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 1 * 10 * 1000, // 1 minute
    max: 15 // requests during window
});

let cachedStocks;
let lastComputeTime;

app.get('/simdaq-stocks', limiter, async (req, res, next) => {

    if (lastComputeTime && lastComputeTime > Date.now() - 0.75 * 1000) {
        return res.json(cachedStocks);
    }

    resources.getStocks(resources.companies);
    cachedStocks = resources.companies;
    lastComputeTime = Date.now();
    return res.json(resources.companies);
});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found');
  return next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  return res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log('Working & listening on port', port);
});