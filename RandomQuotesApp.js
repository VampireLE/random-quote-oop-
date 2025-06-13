import { Quote } from "./src/Classes/Quote.js";
import RandomQuote from "./src/Classes/RandomQuote.js";

export class RandomQuotesApp {
    constructor() {
        this.currentQuote = null;
        this.randomQuoteBtn = document.getElementById('random-quote-btn');
        this.quoteTextElement = document.getElementById('quote-text');
        this.quoteAuthorElement = document.getElementById('quote-autor');
        this.randomQuoteApiBtn = document.getElementById('random-api-btn');
        this.init();
    }

    displayCurrentQuote() {
        this.quoteTextElement.textContent = this.currentQuote.formatText();
        this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
    }

    changeCurrentQuote(newQuote) {
        if (newQuote instanceof Quote) {
            this.currentQuote = newQuote;
            this.displayCurrentQuote();
        }
    }

    getRandomQuote() {
        this.changeCurrentQuote(RandomQuote.getRandomQuote());
    }

    getRandomQuoteViaAPI() {
        RandomQuote.getRandomQuoteViaApi().then((quote) => this.changeCurrentQuote(quote));
    }

    init() {
        this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
        this.randomQuoteApiBtn.addEventListener('click', () => this.getRandomQuoteViaAPI())
    }
}

export default RandomQuotesApp;