export const getMovie=async(movieName)=>{
        const apikey="dcea53cc";
        let url=`https://www.omdbapi.com/?s=${movieName}&apikey=${apikey}`;
        let response=await fetch(url);
        let movie=await response.json();
        return movie.Search;
}