export const countWords=(str)=>{
    return str.split(' ').length;
}
export const capitalizeFirstWord=(str)=>{
    return str[0].toUpperCase()+str.slice(1);
}
export const isPalindrome=(str)=>{
    let pal=str.split('').reverse().join('');
    if(str===pal){
        return true;
    }
    else{
        return false;
    }
}