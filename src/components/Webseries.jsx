import React, { useEffect, useMemo, useState } from "react";
import "../App.css";
import Header from "./Header"
import SideSlidingBar from "./SideSlidingBar";
import MovieCard from "./MovieCard";
import {webSeries } from "../data";
import { fetchWebSeriesData } from "../Store/Slice/webSeriesSlice";
import {useDispatch, useSelector} from 'react-redux'

function Webseries() {

    const webSeriesData = useSelector (state => state.webSeriesData.webSeries || [])
  
    const dispatch = useDispatch()
    useEffect(()=>{
         const fetchMovies = async () => {
          await Promise.all(
            webSeries.map((title)=>{
              dispatch(fetchWebSeriesData(title))
          })
          )
         }
         fetchMovies()
    },[dispatch]) 
    // console.log(movieData);
    
      // // Memoize movie data to avoid recalculation on every render
      // const memoizedMovieData = useMemo(() => movieData, [movieData]);
  
      // // Memoize the rendered MovieCard components to improve rendering performance
      // const renderedMovieCards = useMemo(() => 
      //   memoizedMovieData.map((movie, index) => (
      //     movie && <MovieCard key={index} movie={movie} />
      //   )),
      //   [memoizedMovieData]
      // );
  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    <div className="ott-sec">
      <SideSlidingBar />
      <div className="movie-sec">
        <ul style={{ height:"350px"}}>
          <li style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
          
              {webSeriesData.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
               {/* {renderedMovieCards} */}
          </li>
        </ul>
      </div>
    </div>

    {/* <Navbar /> */}
  </>
  )
}

export default Webseries
