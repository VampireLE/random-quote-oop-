import { Quote } from "./src/Classes/Quote.js";
import RandomQuote from "./src/Classes/RandomQuote.js";

export class RandomQuotesApp {
    constructor() {
        this.currentQuote = null;
        this.randomQuoteBtn = document.getElementById('random-quote-btn');
        this.randomQuoteApiBtn = document.getElementById('random-api-btn');
        this.randomQuotePublicBtn = document.getElementById('random-quote-public-btn');
        this.quoteTextElement = document.getElementById('quote-text');
        this.quoteAuthorElement = document.getElementById('quote-autor');
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

    // async handleRandomQuoteViaOwnAPI() {
    //     this.changeCurrentQuote(await RandomQuote.getRandomQuoteVieOwnAPI());   
    // }


    // async handleRandomQuoteViaPublicAPI() {
    //     this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());   
    // }

    async handleRandomQuoteViaAPI(apiIsOwn = false) {
        apiIsOwn 
        ? this.changeCurrentQuote(await RandomQuote.getRandomQuoteVieOwnAPI())
        : this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());

    }

    init() {
        this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuoteHandler());
        this.randomQuoteApiBtn.addEventListener('click', () => this.handleRandomQuoteViaAPI())
        this.randomQuotePublicBtn.addEventListener('click', () => this.handleRandomQuoteViaAPI(true))

    }
}

export default RandomQuotesApp;