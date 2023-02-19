import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const reponse = await axios.get(fetchUrl);
      setMovies(reponse.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          onClick={slideLeft}
          size={40}
        />
        <div
          id={'slider' + rowId}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide '
        >
          {movies.map((item) => {
            return <Movie item={item} />;
          })}
        </div>
        <MdChevronRight
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer right-0 z-10 hidden  group-hover:block'
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
