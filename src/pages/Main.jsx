import React, { useEffect, useState } from 'react';
import axios from 'axios';
import request from '../Request';
function Main() {
  const [movies, setMovies] = useState([]);
  //base url for images
  const BASE_IMG = 'https://image.tmdb.org/t/p/original';

  //get random movies on each rerender
  const movie = movies[Math.floor(Math.random() * movies?.length)];

  //truncate function
  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(request.fetchNetflixOriginals);
      const movie = await response.data.results;
      setMovies(movie);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(movie);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        {/* overlay effect  */}
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`${BASE_IMG}${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className='absolute top-[20%] w-full p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.name}</h1>
          <div className='my-4'>
            <button className='px-5 py-2 bg-gray-300 text-black mr-2'>
              Play
            </button>
            <button className='px-6 py-2 border border-gray-300'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released:{movie?.first_air_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
