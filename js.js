import data from './data.js';

let movies = [];

if (localStorage.getItem("favorite_movies") === null){
    localStorage.setItem("favorite_movies", JSON.stringify(movies));  
}

let movielist = JSON.parse(localStorage.getItem("favorite_movies"))

function MovieID(ID){
    let movie = data.find(function(movie){
        return movie.id == ID;
    });

    if(movielist.length == 0){
        movielist.push({
            "MovieId":movie.id,
            "MovieTitle": movie.title
        });
    }else{
        let findID = movielist.find(ele => ele.MovieId == ID);

            if(findID === undefined){
                movielist.push({
                    "MovieId":movie.id,
                    "MovieTitle": movie.title
                });
            }
    }

    localStorage.setItem("favorite_movies", JSON.stringify(movielist));
}


function RemoveMovie(ID){
    let filter = movielist.filter(ele => ele.MovieId != ID);
    localStorage.setItem("favorite_movies", JSON.stringify(filter));
    movielist = filter;
}


function ShowMovies(){
    
    for(let i = 0; i < localStorage.length; i++){
        movielist.map(function(i){
            data.find(function(movie){
                if(movie.id == i.MovieId){
                    console.log(`${i.MovieTitle}:`);
                    console.log("\n")
                    for(let j in movie){
                        console.log(`${j}: ${movie[j]}`);
                    }
                    console.log("---------------------------------------------------------------------------------------");
                }
            });
        });
    }   
}


MovieID(361743);
MovieID(414906);
MovieID(438148);
MovieID(718930);

RemoveMovie(718930);

ShowMovies();