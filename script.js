const baseUrl = "https://www.omdbapi.com";
//const apiKey = "132065c1";
const apiBar = document.getElementById("api-Key");
const searchBar = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const movieContainer = document.getElementById("movie-container");

const main = document.getElementById("main");
const loader = document.createElement("div");
loader.className = "spinning-Loader";

searchBtn.addEventListener("click",()=>{
    const apiKey = apiBar.value;
    const searchContent = searchBar.value;

    if(searchContent  === ""){
       return  alert("Enter Movie Name");
    }

    movieContainer.innerHTML = "";

    main.appendChild(loader);

    fetchSearchResults(apiKey,searchContent);
});

async function fetchSearchResults(apiKey,searchContent){
    const endpoint = `${baseUrl}/?s=${searchContent}&apikey=${apiKey}`;
    try {
       const response = await fetch(endpoint);
       const result = await response.json();
       
       renderMovieOnUI(result.Search);

    } catch (error) { 
        alert("Invalid API Key!");
    }
}

function renderMovieOnUI(MovieList){

    main.removeChild(loader);

    MovieList.forEach(element => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-card";

        movieItem.innerHTML = `
        <div class="movie-card">
        <div class="card-img">
            <img src="${element.Poster}" alt="">
        </div>
        <div class="movie-content">
            <div class="title">${element.Title}</div>
            <div class="year">${element.Year}</div>
            <a href="${`https://www.imdb.com/title/${element.imdbID}/`}">More Details</a>
        </div>               
    </div>
        `
        movieContainer.appendChild(movieItem);

    });
}


/*
{Search: Array(10), totalResults: '86', Response: 'True'}
Response
: 
"True"
Search
: 
Array(10)
0
: 
Poster
: 
"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
Title
: 
"Jurassic Park"
Type
: 
"movie"
Year
: 
"1993"
imdbID
: 
"tt0107290"
[[Prototype]]
: 
Object
1
: 
{Title: 'The Lost World: Jurassic Park', Year: '1997', imdbID: 'tt0119567', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2…jdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'}
2
: 
{Title: 'Jurassic Park III', Year: '2001', imdbID: 'tt0163025', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDMyZGJjOG…WE3MGQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'}
3
: 
{Title: "The Making of 'Jurassic Park'", Year: '1995', imdbID: 'tt0256908', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjlhY2Y5NG…DJjNGU2XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg'}
4
: 
{Title: 'Jurassic Park', Year: '1993', imdbID: 'tt0478182', Type: 'game', Poster: 'https://m.media-amazon.com/images/M/MV5BMzRmY2EzOD…TNkZmY2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'}
5
: 
{Title: 'Jurassic Park: The Game', Year: '2011', imdbID: 'tt1988671', Type: 'game', Poster: 'https://m.media-amazon.com/images/M/MV5BY2U2ODNkNG…WY3NTgzXkEyXkFqcGdeQXVyODE5MzM1MTc@._V1_SX300.jpg'}
6
: 
{Title: 'Jurassic Park: Operation Genesis', Year: '2003', imdbID: 'tt0389060', Type: 'game', Poster: 'https://m.media-amazon.com/images/M/MV5BYzg2NGQ0NT…DYwNzhiXkEyXkFqcGdeQXVyNjM2NTM3ODA@._V1_SX300.jpg'}
7
: 
{Title: 'Beyond Jurassic Park', Year: '2001', imdbID: 'tt0321431', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYjVjNzljMD…jVmZmVmXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_SX300.jpg'}
8
: 
{Title: 'The Lost World: Jurassic Park', Year: '1997', imdbID: 'tt0292073', Type: 'game', Poster: 'https://m.media-amazon.com/images/M/MV5BZjJmOTU3Nz…zM5YTdhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'}
9
: 
{Title: 'Jurassic Park: Chaos Island', Year: '1997', imdbID: 'tt1306984', Type: 'game', Poster: 'https://m.media-amazon.com/images/M/MV5BMjcxMTliZj…WE5MTA1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'}
length
: 
10
[[Prototype]]
: 
Array(0)
totalResults
: 
"86"
[[Prototype]]
: 
Object
*/