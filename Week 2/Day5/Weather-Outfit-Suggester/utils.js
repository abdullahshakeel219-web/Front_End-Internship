export const getCoordinates=async(city)=>{
    let url=`https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    let response=await fetch(url);
    let data=await response.json();
    if(!data.results||data.results.length===0){
        throw new Error("City Not found");
    }
    return {
        latitude:data.results[0].latitude,
        longitude:data.results[0].longitude
    };
}
export const getTemperature=async(lat,lon)=>{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
     let response=await fetch(url);
     let data=await response.json();

    return data.current.temperature_2m;
}