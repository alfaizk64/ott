import React from "react";
import ReactDOM from "react-dom";
import { IoMdAdd } from "react-icons/io";

import "../styles/style.css";

const MovieCard = () => (
  <div className="card">
    <div className="card-content">
      <h2 className="card-title">Something Awesome</h2>
      <p className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
      </p>
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
);

export default MovieCard;
