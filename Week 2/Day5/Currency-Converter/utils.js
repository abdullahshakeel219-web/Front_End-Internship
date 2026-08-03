export const formatConversion=(currency,amount,rate)=>{
    const total=amount*rate;
    return `${amount} USD= ${total} ${currency}`;
}