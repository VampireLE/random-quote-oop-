const express = require('express'); //commonjs module
const quotes = require('./data/qoutes');
const cors = require('cors');
const app = express()
const PORT = 5000;

const corsOptions = {
    origin: '*'
    // origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}


function getRandomQuote() {
    const randomIndex =  Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

app.use(cors(corsOptions));


app.get('/quotes/random-single', (req, res) => {
    res.json(getRandomQuote())
})

app.listen(PORT, () => {
    console.log(`Quote API service is running on port ${PORT}`)
})