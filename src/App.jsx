import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideSlidingBar from "./components/SideSlidingBar";
import MovieCard from "./components/MovieCard";
import { bollywoodMovies,webSeries } from "./data";
import { fetchMovieData } from "./Store/Slice/movieSlice";
import { fetchWebSeriesData } from "./Store/Slice/webSeriesSlice";
import {useDispatch, useSelector} from 'react-redux'
function App() {

     const movieData = useSelector (state => state.movieData.movies)
  // useEffect(()=>{
  //   getData()
  // },[])
       
  // const getData = async (data) => {
  //           bollywoodMovies.map( async(title)=>{
  //             const response = await fetch(`https://www.omdbapi.com/?apikey=fa54e057&t=${title}`)
  //               const movieData = await response.json();
  //               console.log(movieData); 
  //           })  
  // }
  const dispatch = useDispatch()
  useEffect(()=>{
     bollywoodMovies.map((title)=>{
                 dispatch(fetchMovieData(title))
     })
  },[dispatch])
  console.log(movieData);
  

  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <div className="ott-sec">
        <SideSlidingBar />
        <div className="movie-sec">
          <ul style={{ height:"350px"}}>
            <li style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
{/*             
                {movies.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))} */}
                 
            </li>
          </ul>
        </div>
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
