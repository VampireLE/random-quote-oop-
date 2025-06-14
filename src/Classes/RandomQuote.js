import quotes from './../data/qoutes.js';
import MathUtils from './../utils/MathUtils.js';
import { Quote } from './Quote.js';

class RandomQuote {
    
    static getRandomQuote() {
        const randomIndex =  MathUtils.generateRandomInt(quotes.length);
        const {id, text, author} = quotes[randomIndex];
        return new Quote(id, text, author);
    }

    static async getRandomQuoteViaApi() {
        const url = 'https://quoteslate.vercel.app/api/quotes/random';
        const options = { headers: {'Content-Type': 'application/json'} };
        try {
            const res =  await fetch(url, options)
            const {_id: id, quote: content, author} = await res.json();
            new Quote(id,quote,author)
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    // static getRandomQuoteViaApi() {
    //     const url = 'https://quoteslate.vercel.app/api/quotes/random';
    //     const options = { headers: {'Content-Type': 'application/json'} };
    //     return fetch(url, options)
    //     .then((response) => response.json())
    //     .then((quote) => {
    //         const {_id: id, quote: content, author} = quote;
    //         return new Quote(id, content, author);
    //     })
    //     .catch((error) => console.log(error))
    // }
}

export default RandomQuote;