import React from "react";
import ReactDOM from "react-dom";
import { IoMdAdd } from "react-icons/io";

import "../styles/style.css";

const MovieCard = ({movie}) => {
 
  
 const bgImage= movie.Poster === "N/A"?('https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg'):(movie.Poster)
 const shortDescription = movie.Plot ? movie.Plot.slice(0, 100) + (movie.Plot.length > 100 ? "..." : "") : "No description available";
  return(
    <div className="card" style={{backgroundImage:`url(${bgImage})`,height:"400px"}}>
    <div className="card-content">
      <h2 className="card-title">{movie.Title} </h2>
      <p className="card-body">
         {shortDescription}
      </p>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"4px"}}>
        <div style={{display:"flex"}}>
         <p style={{fontWeight:"bold"}}>Year:</p> <span>{movie.Year}</span>
        </div>
         <div style={{display:"flex"}}>
          <p style={{fontWeight:"bold"}}>IMDb Rating:</p> <span>{movie.imdbRating}</span>
         </div>
      </div>
      <div style={{display:"flex",marginTop:"4px"}}>
        <p >Genre:</p><span>{movie.Genre}</span>
      </div>
      <div style={{display:"flex",marginTop:"4px"}}>
        <p>Duration:</p><span>{movie.Runtime}</span>
      </div>
      <div style={{display:"flex",gap:"4px"}}>
      <a href="#" className="button">
        Watch Now
      </a>
      <a style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"}} href="#" className="button">
         Watchlist <IoMdAdd />
      </a>
      </div>
    </div>
  </div>
  )
}

export default MovieCard;
