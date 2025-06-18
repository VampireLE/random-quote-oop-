const express = require('express'); //commonjs module
const quotes = require('./data/qoutes');

const app = express()
const PORT = 5000;

console.log(app)

function getRandomQuote() {
    const randomIndex =  Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

app.get('/quotes/random-single', (req, res) => {
    res.json(getRandomQuote())
})

app.listen(PORT, () => {
    console.log(`Quote API service is running on port ${PORT}`)
})