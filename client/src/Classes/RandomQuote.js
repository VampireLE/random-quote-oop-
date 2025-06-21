import quotes from '../data/qoutes.js';
import MathUtils from '../utils/MathUtils.js';
import { Quote } from './Quote.js';

class RandomQuote {
    
    static getRandomQuote() {
        const randomIndex =  MathUtils.generateRandomInt(quotes.length);
        const {id, text, author} = quotes[randomIndex];
        return new Quote(id, text, author);
    }

    static async getRandomQuoteViaPublicApi() {
        const url = 'https://api.quotable.io/quotes/random';
        const options = { headers: {'Content-Type': 'application/json'} };
        try {
            const res =  await fetch(url, options)
            const quotes = await res.json();
            if (Array.isArray(quotes) && quotes.length === 1) {
                const quote = quotes[0];
                const {_id: id, content, author} = quote;
                if (id && content && author) {
                    return new Quote(id, content, author);
                }
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getRandomQuoteVieOwnAPI() {
        const url = 'http://localhost:5000/quotes/random-single';
        const options = { headers: {'Content-Type': 'application/json'} };
        try {const res = await fetch(url, options)
        const quote = await res.json()
        const {id, text, author} = quote;
        return new Quote(id, text, author);} catch {error => console.log(error)}
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