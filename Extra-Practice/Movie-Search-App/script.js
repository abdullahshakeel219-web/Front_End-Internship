import {getMovie} from './api.js';

let btn=document.getElementById("searchBtn");
let status=document.getElementById("status");
let result=document.getElementById("result");

let movies=[];

btn.addEventListener("click",async()=>{
    let movieName=document.getElementById("movieName").value;
    if(!movieName.trim()){
    status.textContent="Please enter movie name";
    return;
}
    status.textContent='Loading---';
    try {
        movies=await getMovie(movieName);
        const moviesList=movies.map(movie=>{ 
            return` <div class=movie-cards>
            <h3>Movie Name: ${movie.Title}</h3>
            <h3>Released Year: ${movie.Year}</h3>
            <img src="${movie.Poster}" alt="" width="300%" height="80%" />
            </div>`
        })
        let finalMovies=moviesList.join('');
        result.innerHTML=finalMovies;
        status.textContent='';
    } catch (error) {
        
        result.textContent='There is some issue,try after sometime'+error.message;
    }
})