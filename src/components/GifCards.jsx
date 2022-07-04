import React from "react";
import { Link } from "react-router-dom";
const GifCards = ({categoria, gifs, showMore}) => {
 
  return (
    <div className="col">
      <h3 className="text-white">{categoria} Gifs</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Tarjetas con gifs */}
        {gifs.map((gif)=>(
          <div className="col" key={gif.id}>
          <div className="card d-block h-100 rounded-3">
            <Link to="/">
              <img
                src={gif.url}
                className="card-img-top img_paginas animate__animated animate__fadeIn "
                alt={gif.title}
              />
            </Link>
          </div>
        </div>

        ))}
      </div>

      <div className="my-3 d-flex justify-content-center">
        <button className="btn btn-search" onClick={showMore}>More</button>
      </div>
    </div>
  );
};

export default GifCards;
