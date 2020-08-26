const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');

function getStocks(input) {
    let newStocks = []
    for (let i = 0; i < input.length; i++) {
        let multiplier = Math.random() * 0.1 - 0.05;
        input[i].price = Number(parseFloat(input[i].price * multiplier + input[i].price).toFixed(2));
        newStocks.push(input[i]);
    }
    return newStocks;
    
}

let companies = [
    {
        name: "AAPL",
        price: 458.83,
        logo: "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
    },
    {
        name: "FB",
        price: 261.16,
        logo: "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png?fit=600%2C600"
    },
    {
        name: "GOOGL",
        price: 1516.24,
        logo: "https://cdn.vox-cdn.com/thumbor/2eZPJ-j9zXm5AIro7TIiEBCgNoc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/3218223/google.jpg"
    },
    {
        name: "GTSBY",
        price: 4990.12,
        logo: "https://media-exp1.licdn.com/dms/image/C560BAQHuiTdDW58LOw/company-logo_200_200/0?e=1606348800&v=beta&t=DVVrNQXp9Kw6WAH0XqjvdXJUboA2N8yvkBkE0h0XA-s"
    },
    {
        name: "AMZN",
        price: 3284.72,
        logo: "https://p7.hiclipart.com/preview/832/502/474/text-brand-clip-art-amazon.jpg"
    }

]

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));
//app.use(cors()); // special header that allows frontend to talk to backend

app.get('/simdaq-stocks', async (req, res) => {
//   if (cache) return res.json(cache);

//   let page = await getVideos();
//   let videos = page.items;

//   while (page.nextPageToken) {
//     page = await getVideos(page.nextPageToken);
//     videos = videos.concat(page.items);
//   }

//   cache = videos;
//   res.json(videos);
    companies = getStocks(companies);
    res.json(companies);

});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found');
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log('Listening on port', port);
});