import React from "react";

function Navbar({movieData,setMovieList}) {

    // console.log(movieData);
    function filterredByGenre(genre) {
        const filteredMovies = movieData.filter(movie => movie?.genres.includes(genre));
        setMovieList(filteredMovies); 
      }
    
  return (
    <div
      className="my-4 bg-dark p-2 rounded mx-auto text-center"
      style={{ width: "80%" }}
    >
      <button onClick={()=> setMovieList(movieData)} type="button" className="btn btn-outline-primary mx-2">
        All
      </button>
      <button onClick={()=>filterredByGenre("Action")} type="button" className="btn btn-outline-primary mx-2">
        Action
      </button>
      <button onClick={()=>filterredByGenre("Thriller")} type="button" className="btn btn-outline-success mx-2">
        Thriller
      </button>
      <button onClick={()=>filterredByGenre("Comedy")} type="button" className="btn btn-outline-danger mx-2">
        Comedy
      </button>
      <button onClick={()=>filterredByGenre("Horror")} type="button" className="btn btn-outline-warning mx-2">
        Horror
      </button>
      <button onClick={()=>filterredByGenre("Drama")} type="button" className="btn btn-outline-info mx-2">
        Drama
      </button>
      <button onClick={()=>filterredByGenre("Romance")} type="button" className="btn btn-outline-light mx-2">
        Romance
      </button>
    </div>
  );
}

export default Navbar;
