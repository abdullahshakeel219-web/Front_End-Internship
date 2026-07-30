import _ from 'lodash';
export const getRandomQuote=(quotesArray)=>{
    return _.sample(quotesArray);
}
export const formatQuote=(quote)=>{
    return "📌 "+quote;
}
