import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <span>{movie.Type}</span>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="Poster" />
      </div>
      <div>
        <span>{movie.Title}</span>
        <h3>{movie.Year}</h3>
      </div>
    </div>
  );
}

export default MovieCard;