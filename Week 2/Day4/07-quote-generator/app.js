import chalk from 'chalk';
import {quotes} from './quotes.js';
import { getRandomQuote,formatQuote} from './quoteHelper.js';
let qt=getRandomQuote(quotes);
console.log(chalk.blue(formatQuote(qt)));