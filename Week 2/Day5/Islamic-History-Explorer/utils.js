export const getSummary=async (eventName)=>{
    let url=`https://en.wikipedia.org/api/rest_v1/page/summary/${eventName}`;
    const response=await fetch(url);
    const data=await response.json();
    return data.extract;
}