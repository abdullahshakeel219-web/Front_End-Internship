export const celsiusToFahrenheit=(c)=>{
    return (c*9/5)+32;
}
export const fahrenheitToCelsius=(f)=>{
    return (f-32)*5/9;
}
const convert=(value,fromUnit)=>{
    if(fromUnit==="C"){
        return celsiusToFahrenheit(value);
    }
    else if(fromUnit==="F"){
        return fahrenheitToCelsius(value);
    }
}
export default convert;