import { Quote } from "./src/Classes/Quote.js";
import RandomQuote from "./src/Classes/RandomQuote.js";

export class RandomQuotesApp {
    constructor() {
        this.currentQuote = null;
        this.randomQuoteBtn = document.getElementById('random-quote-btn');
        this.quoteTextElement = document.getElementById('quote-text');
        this.quoteAuthorElement = document.getElementById('quote-autor');
        this.init();
    }

    displayCurrentQuote() {
        const { id, text, author } = this.currentQuote;
        this.quoteTextElement.textContent = this.currentQuote.formatText();
        this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
    }

    getRandomQuote() {
        const randomQuote = RandomQuote.getRandomQuote();
        this.currentQuote = randomQuote;
        this.displayCurrentQuote();

    }

    init() {
        this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    }
}

export default RandomQuotesApp;