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

    getRandomQuoteHandler() {
        this.changeCurrentQuote(RandomQuote.getRandomQuote());
    }

    async randomQuoteViaAPIHandler() {
        this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaApi());   
    }

    init() {
        this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuoteHandler());
        this.randomQuoteApiBtn.addEventListener('click', () => this.randomQuoteViaAPIHandler())
    }
}

export default RandomQuotesApp;