import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { movies } from "./data";
import SideSlidingBar from "./components/SideSlidingBar";
import MovieCard from "./components/MovieCard";
import { UseData } from "./customHook/useDatahook";
import { bollywoodMovies,webSeries } from "./data";
function App() {

  // const [movies, setMovies] = useState();

  useEffect(()=>{
    getData()
  },[])
       
  const getData = async (data) => {
   
    // const movieData = await UseData('https://api.themoviedb.org/3/discover/movie','eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJmY2U5MDA3MzJhOWVjMjVhZTNhZTYwNDI3YTg3ZiIsIm5iZiI6MTcyOTg0Mjk2Ni41OTAyNCwic3ViIjoiNjcxOWZmNGQ0NTQyZTM3MWZlMGE0YTEzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LKCudVfBLTN5TP_7grtstUQnsz8pdP3JidiJyP_OTY8')
    //        console.log(movieData);
          //  const response = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${game}`)
          //   const movieData = await response.json();
          //   console.log(movieData);
            bollywoodMovies.map( async(title)=>{
              const response = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${title}`)
                const movieData = await response.json();
                console.log(movieData); 
            })
    //  if(movieData || movieData.results){
    //   movieData.results.map( async (movie)=>{
    //     console.log(movie.original_title);
    //     const movieDetails = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${movie.original_title}`);
    //     const movieDetailsData = await movieDetails.json();
    //     console.log(movieDetailsData);
    //     // movie.details = movieDetailsData;
    //     // setMovies([...movies, movie]);
    //   })
    //  }
   
  }

  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <div className="ott-sec">
        <SideSlidingBar />
        <div className="movie-sec">
          <ul style={{ height:"350px"}}>
            <li style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
            
                {movies.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))}
              
            </li>
          </ul>
        </div>
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
