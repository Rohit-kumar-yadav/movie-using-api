import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import "./components/App.css"

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieData, setMovieData] = useState([]);

  async function fecthedMovieData() {
    const response = await fetch("https://dummyjson.com/c/62b0-bb5b-4857-a17a");
    const data = await response.json();
    setMovieData(data.movies);
    setMovieList(data.movies);
  }
  console.log(movieList);

  useEffect(() => {
    fecthedMovieData();
  }, []);

  return (
    <div>
      <Navbar movieData={movieData} setMovieList={setMovieList} />
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {movieList.map((item) => (
          <div className="movie-container" style={{ padding: "5px", textAlign: "center" }}>
            <img
              style={{ width: "200px", height: "300px", marginBottom:'10px'}}
              src={item.thumbnail}
              alt={item.title}
            />
            <h4 style={{ width: "250px" }}>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
