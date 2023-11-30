import React from 'react'
import MovieCard from './MovieCard';
import moviesData from './data';


const MovieList = ({ myMovies }) => {
    // console.log(myMovies);
  return (
    <div className='max-w-4xl mx-auto mt-5'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {myMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;