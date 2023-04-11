require('dotenv').config()
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const yelp = require('yelp-fusion');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set(express.static('public'));


const api_key = process.env.API_KEY


app.set('view engine', 'ejs');
app.use(express.static('public'));


// app.use(bodyParser.urlencoded ({
//   extended: true
// }));

// app.use(bodyParser.urlencoded ({
//   extended: false
// }));

// app.use(bodyParser.json());

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});


const port = process.env.PORT || 3001;
console.log("Running on " + port)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

let restaurant,
    city, 
    price,
    category,
    num = 0;



app.get('/selection', (req, res) => {
    console.log('running')
    city = req.query.city;
    price = req.query.price;
    category = req.query.category;
    
  
    console.log("category: " + category)
    console.log("city: " + city)
    console.log("price: " + price)

    const url = `https://api.yelp.com/v3/businesses/search?location=${city}&categories=${category}&price=${price}&sort_by=best_match&limit=50`

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      Authorization: `Bearer ${api_key}`
      }
    };


  fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      const err = new Error("Downstream API request failed");
      err.status = response.status;
      err.response = response;
      throw err;
    }
    return response.json();
  })
  .then((response) => {
    // console.log("result: ", response);
    num = Math.floor(Math.random() * (Object.keys(response.businesses).length || {}));
    console.log(response.businesses[num])
    console.log("Number of Choices: " + (Object.keys(response.businesses).length || {}))
    console.log("random number: " + num)
    restaurant = response.businesses[num]
    res.send(restaurant); 
    // res.json(restaurant);
  })
  .catch(async (err) => {
    console.error(err.status, await err.response?.text(), err);
    res.status(502).send(err);
  });

    
          
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log("result: ", response);
    //     num = Math.floor(Math.random() * (Object.keys(response.businesses).length));
    //     console.log(response.businesses[num])
    //     console.log("Number of Choices: " + (Object.keys(response.businesses).length))
    //     console.log("random number: " + num)
    //     restaurant = response.businesses[num]
    //     res.render('rest', {
    //       restaurant: restaurant
    //     })
    //     res.status(200).send(response);
    //   })
    //   .catch(err => {
    //     res.status(401).send(err);
    //     console.error(err)
    //   });
});